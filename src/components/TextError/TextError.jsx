import styles from './TextError.module.scss'


const TextError = ({name, error, children}) => {
	const renderError = () => {
		switch (name) {
			case 'name':
				return <span className={styles.error}>{error}</span>
			case 'email':
				return <span className={styles.error}>{error}</span>
			case 'phone':
				return <span className={styles.error}>Number should start with <span className={styles.plus}>+</span>380 and numbers</span>
			default:
				return <span className={styles.error}>{children}</span>
		}
	}

	return (
		<div className={styles.form__textError}>
			{renderError()}
		</div>
	)
}

export default TextError
