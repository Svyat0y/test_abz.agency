import styles from '../Form/FormComponent.module.scss'

import { ErrorMessage, Field } from 'formik'
import { TextError }           from '../TextError'


const RadioButtons = ({ label, name, options, ...rest }) => {

	return (
		<div className={ styles.form__radiosWr }>
			<label>{ label }</label>
			<Field name={ name } { ...rest }>
				{
					({ field }) => {
						return options.map(option => {
							return (
								<div className={ styles.form__radio } key={ option.id }>
									<input
										type='radio'
										id={ option.id }
										{ ...field }
										value={ option.name }
										checked={ field.value === option.name }
									/>
									<label htmlFor={ option.id }>{ option.name }</label>
								</div>
							)
						})
					}
				}
			</Field>
			<ErrorMessage name={ name } component={ TextError }/>
		</div>
	)
}

export default RadioButtons