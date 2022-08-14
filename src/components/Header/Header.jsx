import styles from './Header.module.scss'
import logo   from '../../assets/images/logo.svg'


const Header = ({ contentRef, formRef }) => {

	const scrollToContent = () => {
		contentRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	const scrollToForm = () => {
		formRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<header className={ styles.header }>
			<div className={ styles.header__logo }>
				<img src={ logo } alt='logo'/>
			</div>
			<div>
				<button onClick={ scrollToContent } className={ `btn ${ styles.headerBtn }` }>Users</button>
				<button onClick={ scrollToForm } className='btn header-btn'>Sign up</button>
			</div>
		</header>
	)
}

export default Header