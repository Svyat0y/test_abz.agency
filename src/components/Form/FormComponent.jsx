import styles from './FormComponent.module.scss'

import { useEffect, useState } from 'react'

import { Formik, Form }            from 'formik'
import { validationSchema }        from '../../validators'
import { InputText, RadioButtons } from '../Inputs'
import { fetchPositions }          from '../../api/api'


const FormComponent = ({ formRef }) => {
	const [ image, setImage ] = useState()
	const [ radioOptions, setRadioOptions ] = useState([])

	useEffect(() => {
		fetchPositions().then(({ positions }) => setRadioOptions(positions))
	}, [])

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		radio: '',
	}

	const onSubmit = (values, onSubmitProps) => {
		console.log(values)
		onSubmitProps.resetForm()
	}

	const handleChange = (event) => {
		const [ file ] = event.target.files
		event.preventDefault()
		setImage(file.name)
	}

	const handleFocus = (e, form) => {
		if ( !e.target.value.includes('+380') ) {
			form.setFieldValue('phone', '+380')
			form.setFieldTouched('phone',)
		}
	}

	return (
		<div ref={ formRef } className={ styles.form }>
			<h2 className='title'>Working with POST request</h2>
			<Formik
				initialValues={ initialValues }
				onSubmit={ onSubmit }
				validationSchema={ validationSchema }
				enableReinitialize
			>
				{
					(formik) => {
						return (
							<Form>
								<InputText name='name' type='text' placeholder='Your name'/>
								<InputText name='email' type='email' placeholder='Email'/>
								<InputText handleFocus={ handleFocus } name='phone' type='tel' placeholder='Phone'/>
								<div className={ styles.form__radios }>
									<RadioButtons label='Select your position' name='radio' options={ radioOptions }/>
								</div>
								<div className={ styles.form__uploadFile }>
									<label className={ styles.form__customBtn } htmlFor='file'>Upload</label>
									<input onChange={ handleChange } className={ styles.form__inputBtn } type='file' id='file'
										   accept='image/jpeg, image/png'/>
									<span className={ styles.form__uploadText }>{ image ? image : 'Upload your photo' }</span>
								</div>
								<button disabled={ !(formik.dirty && formik.isValid) } className='btn' type='submit'>Sign up</button>
							</Form>
						)
					}
				}
			</Formik>
		</div>
	)
}

export default FormComponent