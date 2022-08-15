import styles      from './Content.module.scss'
import emptyAvatar from '../../assets/images/photo-cover.svg'

import { useEffect, useRef, useState } from 'react'
import { fetchUsers }                  from '../../api/api'


const Content = ({ contentRef }) => {
	const [ usersData, setUsers ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ totalPages, setTotalPages ] = useState(0)
	const itemRef = useRef()


	useEffect(() => {
		fetchUsers(currentPage).then(({ total_pages, page, users }) => {
			setTotalPages(total_pages)
			setCurrentPage(page)
			if ( !usersData.length ) setUsers(users)
			else setUsers(prevState => [ ...prevState, ...users ])
		})
	}, [ currentPage ])

	const showMore = () => {
		setCurrentPage((prevState) => prevState + 1)
		itemRef.current.lastChild.scrollIntoView({ block: 'start', behavior: 'smooth' })
	}

	const sortedUsers = usersData.sort((a, b) => b.registration_timestamp - a.registration_timestamp)

	return (
		<div ref={ contentRef } className={ styles.content }>
			<h2 className='title'>Working with GET request</h2>
			<div className={ styles.content__items }>
				{
					sortedUsers && sortedUsers.map(item => <div ref={ itemRef }
																key={ item.id }
																className={ styles.content__item }>
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
			<div className={ styles.content__btnWr }>
				<button
					onClick={ showMore }
					disabled={ currentPage === totalPages }
					className={ `btn ${ styles.contentBtn }` }>
					Show more
				</button>
			</div>
		</div>
	)
}

export default Content