import React from 'react'
import '../scss/_main.scss'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
//Photo by <a href="https://unsplash.com/@sincerelymedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sincerely Media</a> on <a href="https://unsplash.com/photos/XihOO7UOvy4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function Main() {
	return (
		<div>
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
			<main>
				<section>
					<div className='header wrapper'>
						<div className='header__opacity wrapper'>
							<span className='header__title'>LearnPG</span>
							<span className='header__subtitle'>Ucz się na bierząco postgresa, zdobądź dodatkową wiedzę</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Main
