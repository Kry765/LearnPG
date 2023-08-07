import React from 'react'
import '../scss/_main.scss'
import Register from './Register'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

function Main() {
	return (
		<nav>
			<div className='nav'>
				<div className='nav__menu-item'>O mnie</div>
				<div className='nav__menu-item'>Kontakt</div>
				<div className='nav__menu-item'>Zaloguj się</div>
				<div className='nav__menu-item'>
					<Link to='/Register'>Zarejestruj się</Link>
				</div>
				<div className='nav__burger-bar'>
					<RxHamburgerMenu />
				</div>
			</div>
		</nav>
	)
}

export default Main
