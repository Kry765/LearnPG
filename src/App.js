import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StartingPage from './frontend/components/StartingPage'
import Help from './frontend/components/Dashboard/Faq/Help'
import Register from './frontend/components/AuthPage/Register'
import Login from './frontend/components/AuthPage/Login'
import Form from './frontend/components/Dashboard/SettingsPage/Form'
import Dashboard from './frontend/components/Dashboard/StartPage/Dashboard'
import Result from './frontend/components/Result'
import LearnTheory from './frontend/components/Dashboard/LearnPage/LearnTheory'
import Exam from './frontend/components/Dashboard/ExamPage/Exam'
import Settings from './frontend/components/Dashboard/SettingsPage/Settings'
import ResetEmail from './frontend/components/Dashboard/SettingsPage/ResetEmail'
import LearnTest from './frontend/components/Dashboard/LearnPage/LearnTest'
import ResetPwd from './frontend/components/Dashboard/SettingsPage/ResetPwd'
import DeleteUser from './frontend/components/Dashboard/SettingsPage/DeleteUser'
import Root from './frontend/components/Root/Root'
import AdminPage from './frontend/components/Root/AdminPage'
import ModifyFaq from './frontend/components/Root/ModifyFaq'
import ModifyTopic from './frontend/components/Root/ModifyTopic'
import ModifyUser from './frontend/components/Root/ModifyUser'
import ModifyTest from './frontend/components/Root/ModifyTest'

import './frontend/scss/_main.scss'
import './frontend/scss/_dashboard.scss'
import './frontend/scss/_reset.scss'
import './frontend/scss/_learn.scss'
import './frontend/scss/_exam.scss'
import './frontend/scss/_root.scss'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/root' element={<Root />} />
					<Route path='/root/Adminpage' element={<AdminPage />} />
					<Route path='/root/Adminpage/ModifyUser' element={<ModifyUser />} />
					<Route path='/root/Adminpage/ModifyFaq' element={<ModifyFaq />} />
					<Route path='/root/Adminpage/ModifyTopic' element={<ModifyTopic />} />
					<Route path='/root/Adminpage/ModifyTest' element={<ModifyTest />} />
					<Route path='/' element={<StartingPage />} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Dashboard' element={<Dashboard />} />
					<Route path='/Dashboard/Result' element={<Result />} />
					<Route path='/Dashboard/Help' element={<Help />} />
					<Route path='/Dashboard/Form' element={<Form />} />
					<Route path='/Dashboard/Settings' element={<Settings />} />
					<Route path='/Dashboard/Settings/ResetEmail' element={<ResetEmail />} />
					<Route path='/Dashboard/Settings/DeleteUser' element={<DeleteUser />} />
					<Route path='/Dashboard/Settings/ResetPwd' element={<ResetPwd />} />
					<Route path='/Dashboard/Exam' element={<Exam />} />
					<Route path='/Dashboard/Leartheory' element={<LearnTheory />} />
					<Route path='/Dashboard/Learn/LearnTest/:question_id' element={<LearnTest />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
