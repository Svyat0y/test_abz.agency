import styles from '../Form/FormComponent.module.scss'

import { Field }     from 'formik'
import { TextError } from '../TextError'


const InputText = ({ name, type, placeholder, handleFocus }) => {

	const renderHelperText = (name) => {
		if ( name === 'name' ) return 'Name should contain 2-60 characters'
		if ( name === 'email' ) return 'example@dimain.com'
		if ( name === 'phone' ) return '+38(XXX) XXX - XXX - XX'
	}

	return (
		<div className={ styles.form__input }>
			<label htmlFor={ name }></label>
			<Field name={ name }>
				{
					({ field, meta, form }) => {
						const validateInputs = (meta.error && meta.touched) || (meta.error && !meta.touched && field.value) ? styles.error : ''
						const helperText = ((!meta.touched && !meta.error) || (meta.touched && !meta.error)) &&
							<span>{ renderHelperText(field.name) }</span>

						return (
							<>
								<input
									onFocus={ type === 'tel' ? e => handleFocus(e, form) : e => {} }
									className={ validateInputs }
									onBlur={ form.handleBlur }
									type={ type }
									name={ name }
									id={ field.name }
									placeholder={ placeholder }
									{ ...field }
								/>
								{ validateInputs
									? <TextError>{ meta.error }</TextError>
									: helperText }
							</>
						)
					}
				}
			</Field>
		</div>
	)
}

export default InputText