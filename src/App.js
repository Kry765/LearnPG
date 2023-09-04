import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Topics from './components/Topics'
import OneTest from './components/oneTest'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Dashboard' element={<Dashboard />} />
					<Route path='/Dashboard/Topics' element={<Topics />} />
					<Route path='/Dashboard/Topics/onetest' element={<OneTest />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
