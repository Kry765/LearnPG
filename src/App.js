import Main from './frontend/components/Main'
import Register from './frontend/components/Register'
import Login from './frontend/components/Login'
import Dashboard from './frontend/components/Dashboard'
import Learn from './frontend/components/Learn'
import Exam from './frontend/components/Exam'
import Settings from './frontend/components/Settings'
import ResultCloseQuestion from './frontend/components/ResultCloseQuestion'
import Lab from './frontend/components/Lab'

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
					<Route path='/Dashboard/Settings' element={<Settings />} />
					<Route path='/Dashboard/Learn' element={<Learn />} />
					<Route path='/Dashboard/Learn/Lab' element={<Lab />} />
					<Route path='/Dashboard/Exam' element={<Exam />} />
					<Route path='/Dashboard/Results' element={<ResultCloseQuestion />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
