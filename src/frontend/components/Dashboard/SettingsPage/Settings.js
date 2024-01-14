import '../../../scss/_reset.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthNavigation } from '../../../../backend/guard/ProtectLink'
import { DashboardNav } from '../StartPage/DashboardNav'

function Dashboard() {
	const navigate = useNavigate()
	const checkUser = useAuthNavigation()
	useEffect(() => {
		checkUser()
	}, [])

	return (
		<div className='navigation'>
			<DashboardNav />
			<div className='section'>
				<div className='href'>
					<h3>Ustawienia</h3>
					<div>
						<button
							className='href__btn'
							onClick={() => {
								navigate('./resetEmail')
							}}
						>
							Zmień E-mail
						</button>
					</div>
					<div>
						<button
							className='href__btn'
							onClick={() => {
								navigate('./resetPwd')
							}}
						>
							Zresetuj hasło
						</button>
					</div>
					<div>
						<button
							className='href__btn'
							onClick={() => {
								navigate('../Dashboard/form')
							}}
						>
							Skontaktuj się
						</button>
					</div>
					<div>
						<button className='href__btn'>Wyzeruj punkty</button>
					</div>
					<div>
						<button
							className='href__btn'
							onClick={() => {
								navigate('./DeleteUser')
							}}
						>
							Skasuj konto
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
