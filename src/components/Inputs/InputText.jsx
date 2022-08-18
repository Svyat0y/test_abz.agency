import styles from '../Form/FormComponent.module.scss'

import { ErrorMessage, Field } from 'formik'
import { TextError }           from '../TextError'


const InputText = ({ name, type, placeholder, handleFocus }) => {

	return (
		<div className={ styles.form__input }>
			<label htmlFor={ name }></label>
			<Field name={ name }>
				{
					({ field, meta, form }) => {
						const validatePhone = (meta.error && meta.touched && field.value.length) || (meta.error && field.value.length) ? styles.error : ''
						const validateOtherInputs = (meta.error && meta.touched) ? styles.error : ''
						const validateInputs = name === 'phone'
							? validatePhone
							: validateOtherInputs

						return (
							<>
								<input
									onFocus={ type === 'tel' ? e => handleFocus(e, form) : e => {} }
									className={ validateInputs }
									type={ type }
									name={ name }
									id={ field.name }
									placeholder={ placeholder }
									{ ...field }
								/>
								{ validateInputs && <ErrorMessage name={ name } component={ TextError }/> }
							</>
						)
					}
				}
			</Field>

			{ type === 'tel' && <span>+38(XXX) XXX - XXX - XX</span> }
		</div>
	)
}

export default InputText