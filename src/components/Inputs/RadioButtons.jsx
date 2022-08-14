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
								<div className={ styles.form__radio } key={ option.key }>
									<input
										type='radio'
										id={ option.key }
										{ ...field }
										value={ option.value }
										checked={ field.value === option.value }
									/>
									<label htmlFor={ option.key }>{ option.value }</label>
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