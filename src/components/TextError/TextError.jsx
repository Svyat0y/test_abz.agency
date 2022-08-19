import styles from './TextError.module.scss'


const TextError = ({name, error}) => {
	return (
		<div className={styles.form__textError}>
			{name !== 'phone' && <span className={styles.error}>{error}</span>}
			{name === 'phone' &&
				<span className={styles.error}>Number should start with <span className={styles.plus}>+</span>380 and numbers</span>}
		</div>
	)
}

export default TextError
