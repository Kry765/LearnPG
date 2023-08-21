import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Test1 from './components/Test1'
import Practice from './components/Practice'
import Theory from './components/Theory'
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
					<Route path='/Test1' element={<Test1 />} />
					<Route path='/Dashboard/Practice' element={<Practice />} />
					<Route path='/Dashboard/Theory' element={<Theory />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
