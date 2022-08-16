import styles from '../Form/FormComponent.module.scss'

import { ErrorMessage, Field } from 'formik'
import { TextError }           from '../TextError'


const InputText = ({ name, type, placeholder, onClick }) => {
	return (
		<div className={ styles.form__input }>
			<label htmlFor={ name }></label>
			<Field name={ name }>
				{
					({ field, meta, form }) => {
						return (
							<input onClick={ () => onClick(form) }
								   className={ form.errors[name] && meta.touched ? styles.error : '' }
								   type={ type }
								   name={ name }
								   id={ field.name }
								   placeholder={ placeholder }
								   { ...field }
							/>
						)
					}
				}
			</Field>
			<ErrorMessage name={ name } component={ TextError }/>
			{ type === 'tel' && <span>+38(XXX) XXX - XXX - XX</span> }
		</div>
	)
}

export default InputText