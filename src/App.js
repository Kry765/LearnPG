import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			{/* <Main /> */}
			<Router>
				<Routes>
					<Route path='/Home' element={<Main />} />
					<Route path='/Register' element={<Register />} />
				</Routes>
			</Router>
			
		</div>
	)
}

export default App
