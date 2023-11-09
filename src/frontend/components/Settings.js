import '../scss/_settings.scss'
import { FaDatabase } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'

function Dashboard() {
	return (
		<div className='dashboard'>
			<div className='dashboard__left-menu'>
				<div className='dashboard__icon'>
					<FaDatabase />
				</div>
				<div className='dashboard__menu'>
					<div className='dashboard__menu-items'>
						<div className='dashboard__position-icon'>
							<AiFillHome />
							<div className='dashboard__menu-item'>Strona Główna</div>
						</div>
						<div className='dashboard__position-icon'>
							<AiTwotoneSetting />
							<div className='dashboard__menu-item'>Ustawienia</div>
						</div>
						<div className='dashboard__position-icon'>
							<BiSolidHelpCircle />
							<div className='dashboard__menu-item'>Pomoc</div>
						</div>
						<div className='dashboard__position-icon'>
							<FaPowerOff />
							<div className='dashboard__menu-item'>Wyloguj się</div>
						</div>
					</div>
				</div>
			</div>
			<div className='settings'>
				<h3>Ustawienia</h3>
				<div>
					<button className='settings__btn'>Zresetuj hasło</button>
				</div>
				<div>
					<button className='settings__btn'>Zmień Adres Email</button>
				</div>
				<div>
					<button className='settings__btn'>Zmień Nick</button>
				</div>
				<div>
					<button className='settings__btn'>Wyzer punkty</button>
				</div>
				<div>
					<button className='settings__btn'>Skasuj konto</button>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
