import '../../../scss/_reset.scss'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import axios from 'axios'

const resetPoint = async () => {
	const API_URL = 'http://localhost:4000'

	try {
		const response = await axios.post(
			`${API_URL}/resetPoint`,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				withCredentials: true,
			}
		)

		console.log('Authorization Header:', axios.defaults.headers.common['Authorization'])

		if (response.data && response.data.success) {
			alert('Punkty zostały skasowane')
		} else {
			console.error('Unexpected response:', response.data)
		}
	} catch (error) {
		console.error('Error:', error)
	}
}

function Dashboard() {
	const navigate = useNavigate()

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
								navigate('resetemail')
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
						<button className='href__btn' onClick={resetPoint}>
							Wyzeruj punkty
						</button>
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
