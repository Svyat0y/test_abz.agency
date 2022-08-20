import styles from '../FormComponent.module.scss'

import {Field} from 'formik'

import {TextError} from '../../index'


const InputText = ({name, type, placeholder, handleFocus}) => {
	const renderHelperText = (name) => {
		switch (name) {
			case 'name':
				return 'Enter your name'
			case 'email':
				return 'example@domain.com'
			case 'phone':
				return '+38(XXX) XXX - XXX - XX'
			default:
				return ''
		}
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
									onFocus={type === 'tel' ? e => handleFocus(e, form) : () => {}}
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
