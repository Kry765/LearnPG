import StartingPage from './frontend/components/StartingPage'
import Help from './frontend/components/Dashboard/Faq/Help'
import Register from './frontend/components/AuthPage/Register'
import Login from './frontend/components/AuthPage/Login'
import Form from './frontend/components/Dashboard/SettingsPage/Form'
import Dashboard from './frontend/components/Dashboard/StartPage/Dashboard'
import LearnTheory from './frontend/components/Dashboard/LearnPage/LearnTheory'
import Exam from './frontend/components/Dashboard/ExamPage/Exam'
import Settings from './frontend/components/Dashboard/SettingsPage/Settings'
import ResetEmail from './frontend/components/Dashboard/SettingsPage/ResetEmail'
import ResultsCloseQuestion from './frontend/components/Dashboard/ExamPage/ResultsCloseQuestion'
import LearnTest from './frontend/components/Dashboard/LearnPage/LearnTest'
import ResetPwd from './frontend/components/Dashboard/SettingsPage/ResetPwd'
import DeleteUser from './frontend/components/Dashboard/SettingsPage/DeleteUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<StartingPage />} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Dashboard' element={<Dashboard />} />
					<Route path='/Dashboard/Help' element={<Help />} />
					<Route path='/Dashboard/Form' element={<Form />} />
					<Route path='/Dashboard/Settings' element={<Settings />} />
					<Route path='/Dashboard/Settings/ResetEmail' element={<ResetEmail />} />
					<Route path='/Dashboard/Settings/DeleteUser' element={<DeleteUser />} />
					<Route path='/Dashboard/Settings/ResetPwd' element={<ResetPwd />} />
					<Route path='/Dashboard/Exam' element={<Exam />} />
					<Route path='/Dashboard/Exam/ResultsCloseQuestion' element={<ResultsCloseQuestion />} />
					<Route path='/Dashboard/Leartheory' element={<LearnTheory />} />
					<Route path='/Dashboard/Learn/LearnTest/:question_id' element={<LearnTest />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
