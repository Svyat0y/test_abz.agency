import { Header, Preview, Content, FormComponent } from './components'
import { useRef }                                  from 'react'


function App() {
	const usersTitleRef = useRef()
	const formRef = useRef()

	return (
		<div className="App">
			<div className='container'>
				<Header usersTitleRef={ usersTitleRef } formRef={ formRef }/>
				<main>
					<Preview formRef={ formRef }/>
					<Content usersTitleRef={ usersTitleRef }/>
					<FormComponent formRef={ formRef }/>
				</main>
			</div>
		</div>
	)
}

export default App
 