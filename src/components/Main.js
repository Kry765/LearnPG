import React, { useState } from 'react'
import '../scss/_main.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaDatabase } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import Register from './Register'

function Main() {
	const [openNav, setOpenNav] = useState('')
	const navigate = useNavigate()

	return (
		<div>
			<nav>
				<div className='nav'>
					<div className='nav__desktop-items'>
						<div className='nav__desktop-item'>Korzyści</div>
						<div className='nav__desktop-item'>Kontakt</div>
						<div
							className='nav__desktop-item'
							onClick={() => {
								navigate('/Login')
							}}
						>
							Zaloguj się
						</div>
						<div className='nav__desktop-item'>Załóż konto</div>
						<div className='nav__burger-bar'>
							<RxHamburgerMenu
								onClick={() => {
									setOpenNav(!openNav)
								}}
							/>
						</div>
					</div>
					<div className={openNav ? 'nav__mobile-items' : 'nav__close-mobile-items'}>
						<div className='nav__mobile-item'>Strona Główna</div>
						<div className='nav__mobile-item'>Korzyści</div>
						<div className='nav__mobile-item'>Kontakt</div>
						<div className='nav__mobile-item'>Zaloguj się</div>
						<div className='nav__mobile-item'>Zalóż konto</div>
					</div>
					<div className='nav__logo'>
						<span>
							<FaDatabase />
						</span>
					</div>
				</div>
			</nav>
			<main>
				<section>
					<div className='header wrapper'>
						<div className='header__opacity wrapper'>
							<span className='header__title'>LearnPG</span>
							<span className='header__subtitle'>Ucz się na bierząco postgresa, zdobądź dodatkową wiedzę</span>
						</div>
					</div>
				</section>
				<section>oferta</section>
			</main>
		</div>
	)
}

export default Main
