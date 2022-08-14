import { Header, Preview, Content, FormComponent } from './components'
import { useRef }                                  from 'react'


function App() {
	const contentRef = useRef()
	const formRef = useRef()

	return (
		<div className="App">
			<div className='container'>
				<Header contentRef={ contentRef } formRef={ formRef }/>
				<main>
					<Preview formRef={ formRef }/>
					<Content contentRef={ contentRef }/>
					<FormComponent formRef={ formRef }/>
				</main>
			</div>
		</div>
	)
}

export default App
 