import Main from './frontend/components/Main'
import Help from './frontend/components/Help'
import Reset from './frontend/components/Reset'
import Register from './frontend/components/Register'
import Login from './frontend/components/Login'
import Dashboard from './frontend/components/Dashboard'
import Learn from './frontend/components/Learn'
import Exam from './frontend/components/Exam'
import Settings from './frontend/components/Settings'
import ResetEmail from './frontend/components/ResetEmail'
import ResultCloseQuestion from './frontend/components/ResultCloseQuestion'
import Lab from './frontend/components/Lab'
import DeleteUser from './frontend/components/DeleteUser'
import ResetPwd from './frontend/components/ResetPwd'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Reset' element={<Reset />} />
					<Route path='/Dashboard' element={<Dashboard />} />
					<Route path='/Dashboard/Settings' element={<Settings />} />
					<Route path='/Dashboard/Learn' element={<Learn />} />
					<Route path='/Dashboard/Learn/Lab' element={<Lab />} />
					<Route path='/Dashboard/Exam' element={<Exam />} />
					<Route path='/Dashboard/Results' element={<ResultCloseQuestion />} />
					<Route path='/Dashboard/Help' element={<Help />} />
					<Route path='/Dashboard/Settings/ResetPwd' element={<ResetPwd />} />
					<Route path='/Dashboard/Settings/ResetEmail' element={<ResetEmail />} />
					<Route path='/Dashboard/Settings/DeleteUser' element={<DeleteUser />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
