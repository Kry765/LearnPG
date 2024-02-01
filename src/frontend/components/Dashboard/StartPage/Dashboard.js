import '../../../scss/_reset.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DashboardNav } from './DashboardNav'
import { FaDatabase } from '../../../../backend/guard/Icons'
// import { inLogin } from '../../../../backend/guard/ProtectLink'

function Dashboard() {
	const navigate = useNavigate()
	const API_URL = 'http://localhost:4000'
	const [Motivation, setMotivation] = useState('')
	const [Author, setAuthor] = useState('')
	const [point, setPoint] = useState(0)

	useEffect(() => {
		// inLogin(navigate)

		axios
			.get(API_URL + '/getmotivations')
			.then(motivationsResponse => {
				const randomMotivation = motivationsResponse.data[Math.floor(Math.random() * motivationsResponse.data.length)]
				setMotivation(randomMotivation.motivation_text)
				setAuthor(randomMotivation.motivation_author)
			})
			.catch(error => {
				console.error('Error fetching motivations:', error)
			})

		axios
			.get(API_URL + '/getscore', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				withCredentials: true,
			})
			.then(scoreResponse => {
				setPoint(scoreResponse.data.user_point)
			})
			.catch(error => {
				console.error('Error fetching score:', error)
			})
	}, [navigate])

	return (
		<div className='navigation'>
			<div className='nav-auth__auth-items'>
				<div className='nav-auth__auth-item--close'>
					<FaDatabase
						onClick={() => {
							navigate('/')
						}}
					/>
				</div>
			</div>
			<DashboardNav />
			<div className='section'>
				<div className='belt-auth-right'></div>
				<div className='belt-auth-left'></div>
				<div className='section__hello-word'>
					<h3>Witaj użytkowniku</h3>
					<p>Od czego dziś zaczynamy</p>
				</div>
				<div className='section__left-box'>
					<div
						className='section__card'
						onClick={() => {
							navigate('/dashboard/Leartheory')
						}}
					>
						Rozpocznij naukę
						<div className='section__opacity-card'></div>
					</div>
					<div className='section__card--point'>
						<p>Zdobyte punkty:</p>
						<p>{point}</p>
					</div>
				</div>
				<div className='section__right-box'>
					<div
						className='section__card'
						onClick={() => {
							navigate('/dashboard/exam')
						}}
					>
						<div className='section__opacity-exam-card'></div>
						<p>Rozpocznij egzamin</p>
					</div>
					<div className='section__card--gray'>
						<em className='section__motivate'>"{Motivation}"</em>
						<em className='section__motivate'>{Author}</em>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
