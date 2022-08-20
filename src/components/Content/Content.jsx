import styles from './Content.module.scss'

import {Preloader, Users} from '../index'


const Content = ({usersContentRef, usersData, isLoading, currentPage, totalPages, setCurrentPage}) => {

	const showMore = () => {
		setCurrentPage((prevState) => prevState + 1)
		setTimeout(() => {
			usersContentRef.current.scrollIntoView({block: 'start', behavior: 'smooth'})
		}, 500)
	}

	return (
		<div ref={usersContentRef} className={styles.content}>
			<h2 className='title'>Working with GET request</h2>
			{
				!isLoading
					? <Users usersData={usersData}/>
					: <Preloader/>
			}
			<div className={styles.content__btnWr}>
				<button
					onClick={showMore}
					disabled={currentPage === totalPages}
					className={`btn ${styles.contentBtn}`}>
					Show more
				</button>
			</div>
		</div>
	)
}

export default Content
