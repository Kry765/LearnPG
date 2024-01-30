import { outLogin } from '../../../../backend/guard/ProtectLink'
import { useNavigate } from 'react-router-dom'
import {
	FaDatabase,
	AiFillHome,
	AiTwotoneSetting,
	BiSolidHelpCircle,
	FaPowerOff,
} from '../../../../backend/guard/Icons'

export function DashboardNav() {
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await outLogin(navigate)
		} catch (error) {
			console.error('Error during logout:', error)
		}
	}

	return (
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
							navigate('../dashboard')
						}}
					>
						<AiFillHome className='navigation__menu-icons' />
						<p className='navigation__menu-icon-description'>Panel Główny</p>
					</div>
					<div
						className='navigation__menu-item'
						onClick={() => {
							navigate('../dashboard/settings')
						}}
					>
						<AiTwotoneSetting className='navigation__menu-icons' />
						<p className='navigation__menu-icon-description'>Ustawienia</p>
					</div>
					<div
						className='navigation__menu-item'
						onClick={() => {
							navigate('../dashboard/help')
							console.log('FAQ link clicked')
						}}
					>
						<BiSolidHelpCircle className='navigation__menu-icons' />
						<p className='navigation__menu-icon-description'>Pomoc</p>
					</div>
					<div className='navigation__menu-item' onClick={handleLogout}>
						<FaPowerOff className='navigation__menu-icons' />
						<p className='navigation__menu-icon-description'>Wyloguj się</p>
					</div>
				</div>
			</div>
		</div>
	)
}
