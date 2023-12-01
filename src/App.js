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
import ResultsCloseQuestion from './frontend/components/ResultsCloseQuestion'
import Lab from './frontend/components/Lab'
import ResetPwd from './frontend/components/ResetPwd'
import DeleteUser from './frontend/components/DeleteUser'
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
					<Route path='/Dashboard/Exam/ResultsCloseQuestion' element={<ResultsCloseQuestion />} />
					<Route path='/Dashboard/Help' element={<Help />} />
					<Route path='/Dashboard/Settings/ResetEmail' element={<ResetEmail />} />
					<Route path='/Dashboard/Settings/DeleteUser' element={<DeleteUser />} />
					<Route path='/Dashboard/Settings/ResetPwd' element={<ResetPwd />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
