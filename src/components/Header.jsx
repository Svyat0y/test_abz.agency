import logo from '../assets/images/logo.svg'


const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img className='header' src={ logo } alt='logo'/>
			</div>
			<div className='header__auth'>
				<button className='btn header-btn'>Users</button>
				<button className='btn header-btn'>Sign up</button>
			</div>
		</header>
	)
}

export default Header