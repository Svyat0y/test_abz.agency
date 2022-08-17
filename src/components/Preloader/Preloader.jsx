import styles    from './Preloader.module.scss'
import preloader from '../../assets/images/Preloader.png'


const Preloader = () => {
	return (
		<div className={ styles.preloader__wrapper }>
			<img className={ styles.rotating } src={ preloader } alt='preloader'/>
		</div>
	)
}

export default Preloader