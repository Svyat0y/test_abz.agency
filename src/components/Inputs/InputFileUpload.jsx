import React         from 'react'
import styles        from '../Form/FormComponent.module.scss'
import { TextError } from '../TextError'


const InputFileUpload = ({ setFieldValue, setFieldTouched, values, errors, touched }) => {

	return (
		<>
			<div className={ styles.form__uploadFile }>
				<label className={ styles.form__customBtn } htmlFor='file'>Upload</label>
				<input onChange={ (event) => {
					const file = event.target.files[0]
					setFieldValue('file', file)
					setFieldTouched('file', true)
				} }
					   className={ styles.form__inputBtn }
					   type='file'
					   id='file'
					   name='file'
					   accept='image/jpeg, image/jpg'
				/>
				<span
					className={ styles.form__uploadText }>{ values['file'] ? values['file'].name : 'Upload your photo' }</span>
			</div>
			{ (errors['file'] && touched['file'] === true)
				? <div className={ styles.formFileError }><TextError>{ errors['file'] }</TextError></div>
				: '' }
		</>
	)
}

export default InputFileUpload