import styles from './FormComponent.module.scss'

import React, { useEffect, useState } from 'react'
import { fetchPositions }             from '../../api/api'

import { Formik, Form }     from 'formik'
import { validationSchema } from '../../validators'

import { InputFileUpload, InputText, RadioButtons } from '../Inputs'


const FormComponent = ({ formRef }) => {
	const [ radioOptions, setRadioOptions ] = useState([])

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
		console.log(values)
		onSubmitProps.resetForm()
	}

	const handleFocus = (e, form) => {
		const value = e.target.value

		if ( !value.length ) {
			form.setFieldValue('phone', '+380'.trim())
		}
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
						const { dirty, isValid, setFieldValue, setFieldTouched, values, errors, touched } = formik
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
								<div className={ styles.formBtn }>
									<button disabled={ !(dirty && isValid) }
											className='btn'
											type='submit'>
										Sign up
									</button>
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