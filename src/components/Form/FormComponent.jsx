import styles from './FormComponent.module.scss'

import {useEffect, useRef, useState} from 'react'
import {Formik, Form}                from 'formik'
import {validationSchema}            from '../../validators'

import {InputFileUpload, InputText, RadioButtons} from '../Inputs'
import Success                                    from './Success'


const FormComponent = ({formRef, setReloadingItems}) => {
	const [radioOptions, setRadioOptions] = useState([])
	const [isSubmit, setIsSubmit] = useState(false)
	const [respError, setRespError] = useState('')

	const successRef = useRef()

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		radio: '',
		file: '',
	}

	useEffect(() => {
		import('../../api/api').then(api => api.fetchPositions().then(({positions}) => setRadioOptions(positions)))
	}, [])

	const onSubmit = (values, onSubmitProps) => {
		setIsSubmit(false)

		import('../../api/api').then(api => api.registration(values).then(resp => {
			if (resp === 'ok') {
				setIsSubmit(true)
				onSubmitProps.resetForm()
				onSubmitProps.setSubmitting(false)
				setTimeout(() => successRef.current.scrollIntoView({block: 'start', behavior: 'smooth'}), 200)
				setTimeout(() => setReloadingItems(true), 500)
			}

			if (resp.error) {
				setRespError(resp.error)
				setIsSubmit(false)
				onSubmitProps.setSubmitting(false)
			}
		}))
	}

	const handleFocus = (e, form) => {
		const value = e.target.value

		if (!value.length) form.setFieldValue('phone', '+380')
	}

	const handleChange = (_, formik) => {
		if ((formik.values['phone'] && formik.errors['phone'])) {
			formik.setFieldTouched('phone', true)
		}
	}

	if (isSubmit) return <Success successRef={successRef}/>

	return (
		<div ref={formRef} className={styles.form}>
			<h2 className='title'>Working with POST request</h2>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				validateOnBlur={false}
				validateOnMount={true}
			>
				{
					(formik) => {
						console.log(formik)
						const {dirty, isValid, setFieldValue, setFieldTouched, values, errors, touched, isSubmitting} = formik

						return (
							<Form onChange={(event) => handleChange(event, formik)} autoComplete='off'>
								<InputText name='name' type='text' placeholder='Your name'/>
								<InputText name='email' type='email' placeholder='Email'/>
								<InputText handleFocus={handleFocus} name='phone' type='tel' placeholder='Phone'/>
								<RadioButtons label='Select your position' name='radio' options={radioOptions}/>
								<InputFileUpload setFieldValue={setFieldValue}
												 setFieldTouched={setFieldTouched}
												 values={values}
												 errors={errors}
												 touched={touched}
								/>
								<div className={`${styles.formBtn} ${isSubmitting && styles.submittingAnim}`}>
									<button disabled={!(isValid && dirty) || isSubmitting}
											className='btn'
											type='submit'>
										Sign up
									</button>
									<span className={styles.form__errorMessage}>{respError ? respError : ''}</span>
								</div>
							</Form>
						)
					}
				}
			</Formik>
		</div>
	)
}

export default FormComponent
