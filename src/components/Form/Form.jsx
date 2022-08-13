import styles from './Form.module.scss'


const Form = () => {
	return (
		<div className={ styles.form }>
			<h2 className='title'>Working with POST request</h2>
			<form>
				<div className={ styles.form__input }>
					<label htmlFor='name'>
						<input type='text' id='name' name='name' placeholder='Your name'/>
					</label>
				</div>

				<div className={ styles.form__input }>
					<label htmlFor='email'>
						<input type='email' name='email' id='email' placeholder='Email'/>
					</label>
				</div>

				<div className={ styles.form__input }>
					<label htmlFor='phone'>
						<input type='tel' name='phone' id='phone' placeholder='Phone'/>
					</label>
					<span>+38(XXX) XXX - XXX - XX</span>
				</div>

				<div className={ styles.form__radios }>
					<span>Select Your position</span>

					<div className={ styles.form__radio }>
						<label>
							<input type='radio' name='option1' id='1'/>
							<span className={ styles.form__radioIndicator }></span>
							<span>Frontend developer</span>
						</label>
						<label>
							<input type='radio' name='option1' id='2'/>
							<span className={ styles.form__radioIndicator }></span>
							<span>Backend developer</span>
						</label>
						<label>
							<input type='radio' name='option1' id='3'/>
							<span className={ styles.form__radioIndicator }></span>
							<span>Designer</span>
						</label>
						<label>
							<input type='radio' name='option1' id='4'/>
							<span className={ styles.form__radioIndicator }></span>
							<span>QA</span>
						</label>
					</div>
				</div>
				<button disabled={ true } className='btn' type='submit'>Sign up</button>
			</form>
		</div>
	)
}

export default Form