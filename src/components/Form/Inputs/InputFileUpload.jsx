import styles from '../FormComponent.module.scss'

import {TextError} from '../../index'


const InputFileUpload = ({setFieldValue, setFieldTouched, values, errors, touched}) => {
	const name = 'file'

	const handleChange = (event) => {
		const file = event.target.files[0]

		setFieldValue(name, file)
		setTimeout(() => setFieldTouched(name, true), 0)
	}

	return (
		<>
			<div className={styles.form__uploadFile}>
				<label className={styles.form__customBtn} htmlFor={name}>Upload</label>
				<input onChange={(event) => handleChange(event)}
					   className={styles.form__inputBtn}
					   type={name}
					   id={name}
					   name={name}
					   accept='image/jpeg, image/jpg'
				/>
				<span
					className={styles.form__uploadText}>{values[name] ? values[name].name : 'Upload your photo'}</span>
			</div>
			{<div className={styles.formFileError}>
				<TextError>{!values[name] && touched[name] ? 'Photo is required' : errors[name]}</TextError></div>}
		</>
	)
}

export default InputFileUpload
