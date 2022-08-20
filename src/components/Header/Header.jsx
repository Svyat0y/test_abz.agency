import styles from './Header.module.scss'
import logo   from '../../assets/images/logo.svg'


const Header = ({usersContentRef, formRef}) => {

	const scrollToElement = (element) => {
		setTimeout(() => {
			element.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		}, 100)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<img src={logo} alt='logo'/>
			</div>
			<div>
				<button onClick={() => scrollToElement(usersContentRef)} className={`btn ${styles.headerBtn}`}>Users</button>
				<button onClick={() => scrollToElement(formRef)} className='btn header-btn'>Sign up</button>
			</div>
		</header>
	)
}

export default Header
