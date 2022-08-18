import styles      from './Content.module.scss'
import emptyAvatar from '../../assets/images/photo-cover.svg'

import { Preloader } from '../index'


const Content = ({ usersTitleRef, usersData, isLoading, currentPage, totalPages, setCurrentPage }) => {

	const showMore = () => {
		setCurrentPage((prevState) => prevState + 1)
		setTimeout(() => {
			usersTitleRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
		}, 500)
	}

	const sortedUsers = usersData.sort((a, b) => b.registration_timestamp - a.registration_timestamp)
	const renderUsers = () => {
		return (
			<div className={ styles.content__items }>
				{
					sortedUsers && sortedUsers.map(item =>
						<div key={ item.id }
							 className={ styles.content__item }>
							<div className={ styles.content__itemImgWr }>
								<img
									src={ item.photo && !item.photo.includes('placeholders') ? item.photo : emptyAvatar }
									alt='avatar-img'/>
							</div>
							<span title={ item.name } className={ styles.content__itemTitle }>
							{ item.name }
							</span>
							<span className={ styles.content__itemInfo }>
							{ item.position }
							</span>
							<span title={ item.email } className={ styles.content__itemInfo }>
								{ item.email }
							</span>
							<span className={ styles.content__itemInfo }>
								{ item.phone }
							</span>
						</div>
					)
				}
			</div>
		)
	}

	return (
		<div className={ styles.content }>
			<h2 ref={ usersTitleRef } className='title'>Working with GET request</h2>
			{
				!isLoading
					? renderUsers()
					: <Preloader/>
			}
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