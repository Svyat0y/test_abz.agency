import styles from './Header.module.scss'
import logo   from '../../assets/images/logo.svg'


const Header = () => {
	return (
		<header className={ styles.header }>
			<div className={ styles.header__logo }>
				<img src={ logo } alt='logo'/>
			</div>
			<div>
				<button className={ `btn ${ styles.headerBtn }` }>Users</button>
				<button className='btn header-btn'>Sign up</button>
			</div>
		</header>
	)
}

export default Header