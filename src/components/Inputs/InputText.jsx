import styles    from '../Form/FormComponent.module.scss'
import { Field } from 'formik'


const InputText = ({ name, type, placeholder }) => {
	return (
		<div className={ styles.form__input }>
			<label htmlFor={ name }></label>
			<Field name={ name }>
				{
					({ field, meta }) => {
						return (
							<input
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
			{ type === 'tel' && <span>+38(XXX) XXX - XXX - XX</span> }
		</div>
	)
}

export default InputText