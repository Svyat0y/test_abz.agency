import styles from '../Form/FormComponent.module.scss'

import {Field}     from 'formik'
import {TextError} from '../TextError'


const InputText = ({name, type, placeholder, handleFocus}) => {

	const renderHelperText = (name) => {
		if (name === 'name') return 'Name should contain 2-60 characters'
		if (name === 'email') return 'example@domain.com'
		if (name === 'phone') return '+38(XXX) XXX - XXX - XX'
	}

	return (
		<div className={styles.form__input}>
			<label htmlFor={name}></label>
			<Field name={name}>
				{
					({field, meta, form}) => {
						return (
							<>
								<input
									{...field}
									onFocus={type === 'tel' ? e => handleFocus(e, form) : e => {}}
									className={(meta.error && meta.touched) ? styles.error : ''}
									type={type}
									name={name}
									id={field.name}
									placeholder={placeholder}
								/>
								{(meta.error && meta.touched) ? <TextError>{meta.error}</TextError> :
									<span className={styles.form__helperText}>{renderHelperText(field.name)}</span>}
							</>
						)
					}
				}
			</Field>
		</div>
	)
}

export default InputText
