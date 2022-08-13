import styles     from './Form.module.scss'
import { Formik } from 'formik'


const Form = () => {

	const initialValues = {
		name: '',
		email: '',
		radio: '',
	}
	const onSubmit = (values, onSubmitProps) => {
		console.log(onSubmitProps)
		onSubmitProps.resetForm()
	}


	return (
		<div className={ styles.form }>
			<h2 className='title'>Working with POST request</h2>
			<Formik
				initialValues={ initialValues }
				onSubmit={ onSubmit }>

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
								<input defaultChecked type='radio' name='option1' id='1'/>
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
					<div className={ styles.form__uploadFile }>
						<label className={ styles.form__customBtn } htmlFor='file'>Upload</label>
						<input className={ styles.form__inputBtn } type='file' id='file'/>
						<span className={ styles.form__uploadText }>Upload your photo</span>
					</div>
					<button className={ `btn ${ styles.formBtn }` } type='submit'>Sign up</button>
				</form>
			</Formik>
		</div>
	)
}

export default Form