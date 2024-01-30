import { useLocation } from 'react-router-dom'
import { DashboardNav } from './Dashboard/StartPage/DashboardNav'

function Result() {
	const location = useLocation()
	const { points, totalQuestions } = location.state || { points: 0, totalQuestions: 0 }

	return (
		<div className='navigation'>
			<DashboardNav />
			<div className='section'>
				<div className='belt-auth-left'></div>
				<h1>Otrzymany wynik to:</h1>
				<p className='space-auth'>
					{points}/{totalQuestions}
				</p>
			</div>
			<div className='belt-auth-right'></div>
		</div>
	)
}

export default Result
