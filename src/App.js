import { Header, Preview, Content, FormComponent } from './components'
import { useEffect, useRef, useState }             from 'react'
import { fetchUsers }                              from './api/api'


function App() {
	const [ usersData, setUsersData ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ totalPages, setTotalPages ] = useState(0)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ reloadItems, setReloadItems ] = useState(false)
	const usersTitleRef = useRef()
	const formRef = useRef()

	useEffect(() => {
		setIsLoading(true)
		fetchUsers(currentPage).then(({ total_pages, page, users }) => {
			setTotalPages(total_pages)
			setCurrentPage(page)
			setUsersData(users)
			setTimeout(() => {
				setIsLoading(false)
			}, 300)
		})
	}, [ currentPage, reloadItems ])

	return (
		<div className="App">
			<div className='container'>
				<Header usersTitleRef={ usersTitleRef }
						formRef={ formRef }/>
				<main>
					<Preview formRef={ formRef }/>
					<Content usersData={ usersData }
							 isLoading={ isLoading }
							 currentPage={ currentPage }
							 totalPages={ totalPages }
							 setCurrentPage={ setCurrentPage }

							 usersTitleRef={ usersTitleRef }/>
					<FormComponent formRef={ formRef }
								   setReloadItems={ setReloadItems }/>
				</main>
			</div>
		</div>
	)
}

export default App
 