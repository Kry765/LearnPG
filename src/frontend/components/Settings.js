import '../scss/_settings.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { DashboardNav } from './DashboardNav'

function Dashboard() {
	const navigate = useNavigate()

	useEffect(() => {
		if (!isLogin()) {
			navigate('/Login')
		}
	}, [navigate])

	return (
		<div className='navigation'>
			<DashboardNav />
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
	)
}

export default Dashboard
