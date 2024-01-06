import '../scss/_dashboard.scss'
import { FaDatabase, AiFillHome, AiTwotoneSetting, BiSolidHelpCircle, FaPowerOff } from '../../backend/guard/Icons'
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
		<div className='navigation'>
			<div className='navigation__left-menu'>
				<div className='navigation__icon'>
					<FaDatabase
						onClick={() => {
							navigate('/')
						}}
					/>
				</div>
				<div className='navigation__menu'>
					<div className='navigation__menu-items'>
						<div
							className='navigation__menu-item'
							onClick={() => {
								navigate('/dashboard')
							}}
						>
							<AiFillHome className='navigation__menu-icons' />
							<p className='navigation__menu-icon-description'>Panel Główny</p>
						</div>
						<div
							className='navigation__menu-item'
							onClick={() => {
								navigate('./settings')
							}}
						>
							<AiTwotoneSetting className='navigation__menu-icons' />
							<p className='navigation__menu-icon-description'>Ustawienia</p>
						</div>
						<div
							className='navigation__menu-item'
							onClick={() => {
								navigate('/dashboard/help')
							}}
						>
							<BiSolidHelpCircle className='navigation__menu-icons' />
							<p className='navigation__menu-icon-description'>Pomoc</p>
						</div>
						<div className='navigation__menu-item' onClick={handleLoggout}>
							<FaPowerOff className='navigation__menu-icons' />
							<p className='navigation__menu-icon-description'>Wyloguj się</p>
						</div>
					</div>
				</div>
			</div>
			<div className='section'>
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
