import avatar from '../assets/images/photo-cover.svg'

import { useState } from 'react'


const Content = () => {

	const [ users, setusers ] = useState()
	return (
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

				<button className='btn content-btn'>Show more</button>


			</div>
		</div>
	)
}

export default Content