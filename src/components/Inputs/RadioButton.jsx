import styles    from '../Form/FormComponent.module.scss'
import { Field } from 'formik'


const RadioButton = ({ type, name, position, ...rest }) => {
	return (
		<>
			<label>
				<Field name={ name } { ...rest }>
					{
						(field, meta) => {
							console.log(field)
							return (
								<input type={ type } name={ name } { ...field }/>
							)
						}
					}
				</Field>
				<span className={ styles.form__radioIndicator }></span>
				<span>{ position }</span>
			</label>
		</>
	)
}

export default RadioButton