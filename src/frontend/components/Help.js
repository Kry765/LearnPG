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
									navigate('/dashboard/settings')
								}}
							>
								<AiTwotoneSetting />
								<div className='dashboard__menu-item'>Ustawienia</div>
							</div>
							<div className='dashboard__position-icon'>
								<BiSolidHelpCircle />
								<div className='dashboard__menu-item'>Pomoc</div>
							</div>
							<div
								className='dashboard__position-icon'
								onClick={() => {
									handleLoggout()
								}}
							>
								<FaPowerOff />
								<div className='dashboard__menu-item'>Wyloguj się</div>
							</div>
						</div>
					</div>
				</div>
				<div className='settings'>
					<h3>Ustawienia</h3>
					<div>
						<button className='settings__btn'>Gdzie moge skierować pytania lub wątpliwości?</button>
						<div className='settings__help'>
							Wszelkie pytania lub błędy należy zgłaszać adres mailowy biuro@learnpg.com
						</div>
					</div>
					<div>
						<button className='settings__btn'>Czy istnieje możliwość zmiany adresu mail lub hasła?</button>
						<div className='settings__help'>Adres mailowy lub hasło można zmienić w zakładce ustawienia</div>
					</div>
					<div>
						<button className='settings__btn'>Czy treść która znajduje się na stronie jest aktualna?</button>
						<div className='settings__help'>
							Treść która znajduję się wyszczególnych działach jest zaczerpnięta z oficjalnej dokumentacji Postgresa
						</div>
					</div>
					<div>
						<button className='settings__btn'>Co mogę zrobić z zebranymi punktami?</button>
						<div>Przyznane punkty można wymienić u prowadzącego na ocenę z aktywności</div>
					</div>
					<div className='settings__help'>
						<button className='settings__btn'>Czy moje dane są bezpiecznie?</button>
						<div className='settings__help'>
							Twoje dane takie jak login, hasło lub adres mailowy jest przechowywany na bazie danych która jest
							hashowana. Dzięki czemu ciężko jest takie dane odszyfrować
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Help
