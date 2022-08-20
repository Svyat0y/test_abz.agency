import styles      from './Content.module.scss'
import emptyAvatar from '../../assets/images/photo-cover.svg'


const Users = ({usersData}) => {
	const sortedUsers = usersData.sort((a, b) => b.registration_timestamp - a.registration_timestamp)

	return (
		<div className={styles.content__items}>
			{
				sortedUsers && sortedUsers.map(item =>
					<div key={item.id}
						 className={styles.content__item}>
						<div className={styles.content__itemImgWr}>
							{/*some pics are on the wrong way ..image/placeholders/, we check it*/}
							<img src={item.photo && !item.photo.includes('placeholders') ? item.photo : emptyAvatar}
								 alt='avatar-img'/>
						</div>
						<span title={item.name} className={styles.content__itemTitle}>
							{item.name}
							</span>
						<span className={styles.content__itemInfo}>
							{item.position}
							</span>
						<span title={item.email} className={styles.content__itemInfo}>
								{item.email}
							</span>
						<span className={styles.content__itemInfo}>
								{item.phone}
							</span>
					</div>
				)
			}
		</div>
	)
}

export default Users
