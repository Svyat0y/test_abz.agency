import emptyAvatar from '../../assets/images/photo-cover.svg'
import styles      from './Content.module.scss'

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
			if ( !users.length ) setUsers(data.users)
			else setUsers([ ...users, ...data.users ])
		}
		fetchUsers()
	}, [ currentPage ])

	const showMore = () => {
		setCurrentPage(currentPage + 1)
	}

	return (
		<div className={ styles.content }>
			<h2 className='title'>Working with GET request</h2>
			<div className={ styles.content__items }>
				{
					users.map(item => <div key={ item.id } className={ styles.content__item }>
						<div className={ styles.content__itemImg }>
							<img
								src={ item.photo && !item.photo.includes('placeholders') ? item.photo : emptyAvatar }
								alt='avatar-img'/>
						</div>
						<span
							title={ item.name }
							className={ styles.content__itemTitle }>
							{ item.name }
						</span>
						<span
							title={ item.position }
							className={ styles.content__itemInfo }>
							{ item.position }
						</span>
						<a
							title={ item.email }
							href={ item.email }
							className={ styles.content__itemInfo }>
							{ item.email }
						</a>
						<a
							title={ item.phone }
							href={ item.phone }
							className={ styles.content__itemInfo }>
							{ item.phone }
						</a>
					</div>)
				}
			</div>
			<button
				onClick={ showMore }
				disabled={ currentPage === totalPages }
				className={ `btn ${ styles.contentBtn }` }>
				Show more
			</button>
		</div>
	)
}

export default Content