import styles                     from './FormComponent.module.scss'
import { Formik, Form }           from 'formik'
import { InputText, RadioButton } from '../Inputs'


const FormComponent = () => {

	const initialValues = {
		name: '',
		email: '',
		phone: '',
		radio: '',
	}
	const onSubmit = (values, onSubmitProps) => {
		console.log(values)
		onSubmitProps.resetForm()
	}

	return (
		<div className={ styles.form }>
			<h2 className='title'>Working with POST request</h2>
			<Formik
				initialValues={ initialValues }
				onSubmit={ onSubmit }>

				<Form>
					<InputText name='name' type='text' placeholder='Your name'/>
					<InputText name='email' type='email' placeholder='Email'/>
					<InputText name='phone' type='tel' placeholder='Phone'/>

					<div className={ styles.form__radios }>
						<span>Select Your position</span>

						<div className={ styles.form__radio }>
							<RadioButton name='radio' type='radio' position='Frontend developer'/>
							<RadioButton name='radio' type='radio' position='Backend developer'/>
							<RadioButton name='radio' type='radio' position='Designer'/>
							<RadioButton name='radio' type='radio' position='QA'/>
						</div>
					</div>
					<div className={ styles.form__uploadFile }>
						<label className={ styles.form__customBtn } htmlFor='file'>Upload</label>
						<input className={ styles.form__inputBtn } type='file' id='file'/>
						<span className={ styles.form__uploadText }>Upload your photo</span>
					</div>
					<button className={ `btn ${ styles.formBtn }` } type='submit'>Sign up</button>
				</Form>
			</Formik>
		</div>
	)
}

export default FormComponent