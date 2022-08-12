import { Header, Preview, Content, Form } from './components'


function App() {
	return (
		<div className="App">
			<div className='container'>
				<Header/>
				<main>
					<Preview/>
					<Content/>
					<Form/>
				</main>
			</div>
		</div>
	)
}

export default App
 