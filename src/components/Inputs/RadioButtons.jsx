import styles from '../Form/FormComponent.module.scss'

import { useState } from 'react'
import { Field }    from 'formik'

import { TextError } from '../TextError'


const RadioButtons = ({ label, name, options, ...rest }) => {
	const [ radioError, setRadioError ] = useState()

	return (
		<div className={ styles.form__radios }>
			<label>{ label }</label>
			<Field name={ name } { ...rest }>
				{
					({ field, meta }) => {
						return options.map((option, i) => {
							return (
								<>
									<div className={ styles.form__radio } key={ option.id }>
										<input
											type='radio'
											id={ option.id }
											{ ...field }
											value={ option.id }
											name={ name }
											checked={ +field.value === +(i + 1) }
										/>
										<label htmlFor={ option.id }>{ option.name }</label>
									</div>
									{ meta.touched && meta.error && setRadioError(meta.error) }
								</>
							)
						})
					}
				}
			</Field>
			<TextError name='radio' error={ radioError }/>
		</div>
	)
}

export default RadioButtons
