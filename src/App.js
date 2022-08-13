import { Header, Preview, Content, FormComponent } from './components'


function App() {
	return (
		<div className="App">
			<div className='container'>
				<Header/>
				<main>
					<Preview/>
					<Content/>
					<FormComponent/>
				</main>
			</div>
		</div>
	)
}

export default App
 