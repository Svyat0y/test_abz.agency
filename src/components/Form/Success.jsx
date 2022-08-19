import styles     from './FormComponent.module.scss'
import successImg from '../../assets/images/success-image.webp'


const Success = ({successRef}) => {
	return (
		<div ref={successRef} className={styles.form__success}>
			<h2 className='title'>User successfully registered</h2>
			<img src={successImg} alt='success'/>
		</div>
	)
}

export default Success
