import '../scss/_dashboard.scss'
import { FaDatabase } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import { useEffect } from 'react'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	const navigate = useNavigate()

	useEffect(() => {
		if (!isLogin()) {
			navigate('/Login')
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
								navigate('/')
							}}
						>
							<AiFillHome />
							<div className='dashboard__menu-item'>Strona Główna</div>
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
						<div className='section__theory flex-center'>
							<div className='section__color-photo'></div>
							<p className='section__card-description'>Rozpocznij naukę</p>
						</div>
						<div className='section__score flex-center'>
							<p className='section__card-description'>Zdobyte punkty</p>
						</div>
					</div>
				</div>
			</div>
			<div className='section'>
				<div className='section flex-between'>
					<div className='section__dashboard-box'>
						<div className='section__exam flex-center'>
							<div className='section__color-photo'></div>
							<p className='section__card-description'>Rozpocznij egzamin</p>
						</div>
						<div className='section__score flex-center'>
							<p className='section__card-description'>Cytat na dziś</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
