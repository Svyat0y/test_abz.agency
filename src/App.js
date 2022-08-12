import logo   from './assets/images/logo.svg'
import avatar from './assets/images/photo-cover.svg'


function App() {
	return (
		<div className="App">
			<div className='container'>

				<header className='header'>
					<div className='header__logo'>
						<img className='header' src={ logo } alt='logo'/>
					</div>
					<div className='header__auth'>
						<button className='btn header-btn'>Users</button>
						<button className='btn header-btn'>Sign up</button>
					</div>
				</header>

				<main>
					<div className='preview'>
						<div className='preview__text-block'>
							<h1>Test assignment for front-end developer</h1>
							<p className='preview-text'>
								What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
								understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
								should also be excited to learn, as the world of Front-End Development keeps evolving.
							</p>
							<button className='btn preview-btn'>Sign up</button>
						</div>
					</div>

					<div className='content'>
						<h2>Working with GET request</h2>
						<div className='content__items'>

							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>
							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>
							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>
							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>
							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>
							<div className='content__item'>
								<div className='content__item-img'>
									<img src={ avatar } alt='avatar-img'/>
								</div>
								<span className='content__item-title'>name</span>
								<span className='content__item-info'>position</span>
								<a href='mail' className='content__item-info'>mail</a>
								<a href='+306632432432' className='content__item-info'>+306632432432</a>
							</div>


						</div>
					</div>


					<div className='form'></div>
				</main>

			</div>
		</div>
	)
}

export default App
 