import styles from './Header.module.scss'
import logo   from '../../assets/images/logo.svg'


const Header = ({usersContentRef, formRef}) => {

	const scrollToContent = () => {
		setTimeout(() => {
			usersContentRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		}, 100)
	}

	const scrollToForm = () => {
		setTimeout(() => {
			formRef.current.scrollIntoView({behavior: 'smooth'})
		}, 100)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<img src={logo} alt='logo'/>
			</div>
			<div>
				<button onClick={scrollToContent} className={`btn ${styles.headerBtn}`}>Users</button>
				<button onClick={scrollToForm} className='btn header-btn'>Sign up</button>
			</div>
		</header>
	)
}

export default Header
