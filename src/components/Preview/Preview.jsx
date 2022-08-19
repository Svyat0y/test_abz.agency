import styles from './Preview.module.scss'


const Preview = ({formRef}) => {

	const scrollToForm = () => {
		setTimeout(() => {
			formRef.current.scrollIntoView({behavior: 'smooth'})
		}, 100)
	}

	return (
		<div className={styles.preview}>
			<div className={styles.preview__textBlock}>
				<h1 className='title'>Test assignment for front-end developer</h1>
				<p>
					What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
					understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
					should also be excited to learn, as the world of Front-End Development keeps evolving.
				</p>
				<button onClick={scrollToForm} className={`btn ${styles.previewBtn}`}>Sign up</button>
			</div>
		</div>
	)
}

export default Preview
