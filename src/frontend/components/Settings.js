import '../scss/_settings.scss'
import { FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'

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
						<div className='dashboard__position-icon'>
							<AiTwotoneSetting />
							<div className='dashboard__menu-item'>Ustawienia</div>
						</div>
						<div
							className='dashboard__position-icon'
							onClick={() => {
								navigate('../help')
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
			<div className='settings'>
				<h3>Ustawienia</h3>
				<div>
					<button
						className='settings__btn'
						onClick={() => {
							navigate('./resetEmail')
						}}
					>
						Zmień E-mail
					</button>
				</div>
				<div>
					<button className='settings__btn'>Zresetuj hasło</button>
				</div>
				<div>
					<button className='settings__btn'>Zmień Nick</button>
				</div>
				<div>
					<button className='settings__btn'>Wyzer punkty</button>
				</div>
				<div>
					<button
						className='settings__btn'
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
