import React from 'react'

import { Header, Preview, Content }    from './components'
import { useEffect, useRef, useState } from 'react'


const FormComponent = React.lazy(() => import('./components/Form/FormComponent'))

function App() {
	const [ usersData, setUsersData ] = useState([])
	const [ currentPage, setCurrentPage ] = useState(1)
	const [ totalPages, setTotalPages ] = useState(0)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ reloadingItems, setReloadingItems ] = useState(false)
	const usersTitleRef = useRef()
	const formRef = useRef()


	useEffect(() => {
		setIsLoading(true)
		import('./api/api').then(api => api.fetchUsers(currentPage).then(({ total_pages, page, users }) => {
			setTotalPages(total_pages)
			setCurrentPage(page)
			setUsersData(users)
			setTimeout(() => {
				setIsLoading(false)
			}, 300)
		}))
	}, [ currentPage, reloadingItems ])

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
					<React.Suspense fallback={ '' }>
						<FormComponent formRef={ formRef }
									   setReloadingItems={ setReloadingItems }/>
					</React.Suspense>
				</main>
			</div>
		</div>
	)
}

export default App
