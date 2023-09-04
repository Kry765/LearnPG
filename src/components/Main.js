import React from 'react'
import '../scss/_main.scss'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

function Main() {
	return (
		<div>
			<nav>
				<div className='nav wrapper'>
					<div className='nav__desktop-item'>Korzyści</div>
					<div className='nav__desktop-item'>Kontakt</div>
					<Link to='/Register' className='nav__desktop-item'>
						Zaloguj się
					</Link>
					<Link to='/Register' className='nav__desktop-item'>
						Zarejestruj się
					</Link>
					<div className='nav__burger-bar'>
						<RxHamburgerMenu />
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
				<section></section>
			</main>
		</div>
	)
}

export default Main
