import '../scss/_dashboard.scss'
import { FaDatabase } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import axios from 'axios'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [Motivation, setMotivation] = useState('')
	const [Author, setAuthor] = useState('')

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
				<div className='section flex-between'>
					<div className='section__dashboard-box'>
						<div
							className='section__theory flex-center'
							onClick={() => {
								navigate('/dashboard/learn')
							}}
						>
							<div className='section__color-photo'></div>
							<p className='section__card-description'>Rozpocznij naukę</p>
						</div>
						<div className='section__score flex-center'>
							<p className='section__card-description'>Zdobyte punkty:</p>
							<p>0/100</p>
						</div>
					</div>
				</div>
			</div>
			<div className='section'>
				<div className='section flex-between'>
					<div className='section__dashboard-box'>
						<div
							className='section__exam flex-center'
							onClick={() => {
								navigate('/dashboard/exam')
							}}
						>
							<div className='section__color-photo'></div>
							<p className='section__card-description'>Rozpocznij egzamin</p>
						</div>
						<div className='section__score flex-center'>
							<p className='section__card-description'>
								<p>{Motivation}</p>
								<p>{Author}</p>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
