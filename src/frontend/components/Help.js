import '../scss/_settings.scss'
import { FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { isLogin, outLogin } from './../../backend/guard/ProtectLink'
import { useEffect } from 'react'
import { FaPowerOff } from 'react-icons/fa'

function Help() {
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
		<div>
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
							<div
								className='navigation__menu-item'
								onClick={() => {
									navigate('/dashboard/settings')
								}}
							>
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
					<h3>FAQ</h3>
					<div>
						<button className='href__btn'>Gdzie moge skierować pytania lub wątpliwości?</button>
					</div>
					<div>
						<button className='href__btn'>Czy istnieje możliwość zmiany adresu mail lub hasła?</button>
					</div>
					<div>
						<button className='href__btn'>Czy treść która znajduje się na stronie jest aktualna?</button>
					</div>
					<div>
						<button className='href__btn'>Co mogę zrobić z zebranymi punktami?</button>
					</div>
					<div>
						<button className='href__btn'>Czy moje dane są bezpiecznie?</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Help
