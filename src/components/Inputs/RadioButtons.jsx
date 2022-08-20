import React  from 'react'
import styles from '../Form/FormComponent.module.scss'

import {ErrorMessage, Field} from 'formik'

import {TextError} from '../TextError'


const RadioButtons = ({label, name, options, ...rest}) => {

	return (
		<div className={styles.form__radios}>
			<label>{label}</label>
			<Field name={name} {...rest}>
				{
					({field}) => {
						return options.map((option, i) => {
							return (
								<React.Fragment key={option.id}>
									<div className={styles.form__radio}>
										<input
											{...field}
											type='radio'
											id={option.id}
											value={option.id}
											name={name}
											checked={+field.value === +(i + 1)}
										/>
										<label htmlFor={option.id}>{option.name}</label>
									</div>
								</React.Fragment>
							)
						})
					}
				}
			</Field>
			<ErrorMessage name={name} component={TextError}/>
		</div>
	)
}

export default RadioButtons
