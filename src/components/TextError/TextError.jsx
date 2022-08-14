import styles from './TextError.module.scss'


const TextError = ({ children }) => {
	return (
		<div className={ styles.form__textError }>
			{ children }
		</div>
	)
}

export default TextError