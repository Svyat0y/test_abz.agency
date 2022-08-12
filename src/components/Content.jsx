import emptyAvatar from '../assets/images/photo-cover.svg'

import { useEffect, useState } from 'react'
import axios                   from 'axios'


const Content = () => {
	const [ users, setUsers ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ totalPages, setTotalPages ] = useState(0)

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${ currentPage }&count=6`)
			setTotalPages(data.total_pages)
			setCurrentPage(data.page)
			console.log(data)
			if ( !users.length ) setUsers(data.users)
			else setUsers([ ...users, ...data.users ])
		}
		fetchUsers()
	}, [ currentPage ])

	const showMore = () => {
		setCurrentPage(currentPage + 1)
	}

	return (
		<div className='content'>
			<h2 className='title'>Working with GET request</h2>
			<div className='content__items'>
				{
					users.map(item => <div key={ item.id } className='content__item'>
						<div className='content__item-img'>
							<img src={ item.photo ? item.photo : emptyAvatar } alt='avatar-img'/>
						</div>
						<span className='content__item-title'>{ item.name }</span>
						<span className='content__item-info'>{ item.position }</span>
						<a href={ item.email } className='content__item-info'>{ item.email }</a>
						<a href={ item.phone } className='content__item-info'>{ item.phone }</a>
					</div>)
				}


			</div>
			<button onClick={ showMore } disabled={ currentPage === totalPages } className='btn content-btn'>Show more</button>
		</div>
	)
}

export default Content