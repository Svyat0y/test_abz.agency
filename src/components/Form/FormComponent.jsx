import styles from './FormComponent.module.scss'

import React, { useEffect, useRef, useState } from 'react'
import { fetchPositions, registration }       from '../../api/api'

import { Formik, Form }     from 'formik'
import { validationSchema } from '../../validators'

import { InputFileUpload, InputText, RadioButtons } from '../Inputs'
import Success                                      from './Success'


const FormComponent = ({ formRef, setReloadItems }) => {
	const [ radioOptions, setRadioOptions ] = useState([])
	const [ isSubmit, setIsSubmit ] = useState(false)
	const [ respError, setRespError ] = useState('')

	const successRef = useRef()

	useEffect(() => {
		fetchPositions().then(({ positions }) => setRadioOptions(positions))
	}, [])

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		radio: '',
		file: '',
	}

	const onSubmit = (values, onSubmitProps) => {
		setIsSubmit(false)
		registration(values).then(resp => {
			if ( resp === 'ok' ) {
				setIsSubmit(true)
				onSubmitProps.resetForm()
				onSubmitProps.setSubmitting(false)
				setTimeout(() => successRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }), 200)
				setTimeout(() => setReloadItems(true), 500)
			}
			if ( resp.error ) {
				setRespError(resp.error)
				setIsSubmit(false)
				onSubmitProps.setSubmitting(false)
			}
		})
	}

	const handleFocus = (e, form) => {
		const value = e.target.value

		if ( !value.length ) {
			form.setFieldValue('phone', '+380')
		}
	}

	if ( isSubmit ) {
		return (
			<Success successRef={ successRef }/>
		)
	}

	return (
		<div ref={ formRef } className={ styles.form }>
			<h2 className='title'>Working with POST request</h2>
			<Formik
				initialValues={ initialValues }
				onSubmit={ onSubmit }
				validationSchema={ validationSchema }
			>
				{
					(formik) => {
						{ formik.values['phone'] === 'phone' && formik.values['phone'] && formik.setFieldTouched('phone', true)}

						const { dirty, isValid, setFieldValue, setFieldTouched, values, errors, touched, isSubmitting } = formik
						return (
							<Form>
								<InputText name='name' type='text' placeholder='Your name'/>
								<InputText name='email' type='email' placeholder='Email'/>
								<InputText handleFocus={ handleFocus } name='phone' type='tel' placeholder='Phone'/>
								<div className={ styles.form__radios }>
									<RadioButtons label='Select your position' name='radio' options={ radioOptions }/>
								</div>
								<InputFileUpload setFieldValue={ setFieldValue }
												 setFieldTouched={ setFieldTouched }
												 values={ values }
												 errors={ errors }
												 touched={ touched }
								/>
								<div className={ `${ styles.formBtn } ${ isSubmitting && styles.submittingAnim }` }>
									<button disabled={ !(dirty && isValid) || isSubmitting }
											className='btn'
											type='submit'>
										Sign up
									</button>
									<span className={ styles.form__errorMessage }>{ respError ? respError : '' }</span>
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