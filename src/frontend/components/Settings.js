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
							<div className='navigation__menu-icon-description'>Panel Główny</div>
						</div>
						<div className='navigation__menu-item'>
							<AiTwotoneSetting className='navigation__menu-icons' />
							<div className='navigation__menu-icon-description'>Ustawienia</div>
						</div>
						<div
							className='navigation__menu-item'
							onClick={() => {
								navigate('/dashboard/help')
							}}
						>
							<BiSolidHelpCircle className='navigation__menu-icons' />
							<div className='navigation__menu-icon-description'>Pomoc</div>
						</div>
						<div className='navigation__menu-item' onClick={handleLoggout}>
							<FaPowerOff className='navigation__menu-icons' />
							<div className='navigation__menu-icon-description'>Wyloguj się</div>
						</div>
					</div>
				</div>
			</div>
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
