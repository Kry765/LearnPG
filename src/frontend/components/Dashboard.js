import '../scss/_dashboard.scss'
import { FaDatabase } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [Motivation, setMotivation] = useState('')
	const [Author, setAuthor] = useState('')
	const [point, setPoint] = useState(0)

	useEffect(() => {
		if (!isLogin()) {
			navigate('/Login')
		} else {
			axios
				.get(API_URL + '/getmotivations')
				.then(res => {
					const randomMotivation = res.data[Math.floor(Math.random() * res.data.length)]

					setMotivation(randomMotivation.motivation_text)
					setAuthor(randomMotivation.motivation_author)
				})
				.catch(err => {
					console.log(err)
				})
			axios
				.get(API_URL + '/getscore')
				.then(res => {
					setPoint(res.data[0].point)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}, [navigate])

	const handleLoggout = () => {
		outLogin()
		navigate('/Login')
	}

	return (
		<div className='dashboard'>
			<div className='dashboard__left-menu'>
				<div className='dashboard__icon'>
					<FaDatabase
						onClick={() => {
							navigate('/')
						}}
					/>
				</div>
				<div className='dashboard__menu'>
					<div className='dashboard__menu-items'>
						<div
							className='dashboard__position-icon'
							onClick={() => {
								navigate('/dashboard')
							}}
						>
							<AiFillHome />
							<div className='dashboard__menu-item'>Panel Główny</div>
						</div>
						<div
							className='dashboard__position-icon'
							onClick={() => {
								navigate('./settings')
							}}
						>
							<AiTwotoneSetting />
							<div className='dashboard__menu-item'>Ustawienia</div>
						</div>
						<div
							className='dashboard__position-icon'
							onClick={() => {
								navigate('/dashboard/help')
							}}
						>
							<BiSolidHelpCircle />
							<div className='dashboard__menu-item'>Pomoc</div>
						</div>
						<div className='dashboard__position-icon' onClick={handleLoggout}>
							<FaPowerOff />
							<div className='dashboard__menu-item'>Wyloguj się</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section'>
				<div className='section__left-box'>
					<div
						className='section__card'
						onClick={() => {
							navigate('/dashboard/learn')
						}}
					>
						<div></div>
						<p>Rozpocznij naukę</p>
					</div>
					<div className='section__card'>
						<p>Zdobyte punkty:</p>
						<p>{point}/100</p>
					</div>
				</div>
				<div className='section__right-box'>
					<div
						className='section__card'
						onClick={() => {
							navigate('/dashboard/exam')
						}}
					>
						<div></div>
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
