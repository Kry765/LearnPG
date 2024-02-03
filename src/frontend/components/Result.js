import { useLocation, useNavigate } from 'react-router-dom'
import { DashboardNav } from './Dashboard/StartPage/DashboardNav'
import { AiOutlineClose } from '../../backend/guard/Icons'

function Result() {
	const location = useLocation()
	const navigate = useNavigate()
	const { points, totalQuestions } = location.state || { points: 0, totalQuestions: 0 }

	return (
		<div>
			<div className='nav-auth__auth-item--close'>
				<AiOutlineClose
					onClick={() => {
						navigate('/dashboard/settings')
					}}
				/>
			</div>
			<div className='navigation'>
				<DashboardNav />
				<div className='section'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<h1>Otrzymany wynik to:</h1>
					<p className='space-auth'>
						{points}/{totalQuestions}
					</p>
					<div className='flex-column'>
						<button className='btn-auth' type='submit'>
							Zakończ
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Result
