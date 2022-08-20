import styles from '../Form/FormComponent.module.scss'

import {TextError} from '../TextError'


const InputFileUpload = ({setFieldValue, setFieldTouched, values, errors, touched}) => {

	const handleChange = (event) => {
		const file = event.target.files[0]

		setFieldValue('file', file)
		setTimeout(() => setFieldTouched('file', true), 0)
	}

	return (
		<>
			<div className={styles.form__uploadFile}>
				<label className={styles.form__customBtn} htmlFor='file'>Upload</label>
				<input onChange={(event) => handleChange(event)}
					   className={styles.form__inputBtn}
					   type='file'
					   id='file'
					   name='file'
					   accept='image/jpeg, image/jpg'
				/>
				<span
					className={styles.form__uploadText}>{values['file'] ? values['file'].name : 'Upload your photo'}</span>
			</div>
			{
				(errors['file'] && touched['file'])
					? <div className={styles.formFileError}><TextError name='file'>{errors['file']}</TextError></div>
					: ''
			}
		</>
	)
}

export default InputFileUpload
