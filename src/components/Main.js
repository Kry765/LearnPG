import React, { useState } from 'react'
import '../scss/_main.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaDatabase } from 'react-icons/fa'
import { RiArrowDownSLine } from 'react-icons/ri'
import { GrSync } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { MdOutlineUpdate } from 'react-icons/md'
import { SiTestcafe } from 'react-icons/si'

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
						<div
							className='nav__desktop-item'
							onClick={() => {
								navigate('/Register')
							}}
						>
							Załóż konto
						</div>
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
						<div
							className='nav__mobile-item'
							onClick={() => {
								navigate('/Login')
							}}
						>
							Zaloguj się
						</div>
						<div
							className='nav__mobile-item'
							onClick={() => {
								navigate('/Register')
							}}
						>
							Zalóż konto
						</div>
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
							<span className='header__subtitle'>
								Ucz się na bierząco postgresa, zdobądź dodatkową wiedzę z zakresu relacyjnych baz danych
							</span>
							<div className='header__arrow-down'>
								<RiArrowDownSLine />
							</div>
						</div>
					</div>
				</section>
				<section>
					<div>
						<div className='offerts'>
							<h1>Korzyści</h1>
							<div className='offerts__cards wrapper'>
								<div className='offerts__card'>
									<span>Wygoda</span>
									<div>
										<SiTestcafe className='offerts__icon-card' />
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis, lectus eu auctor
										scelerisque, enim enim ultricies arcu, at hendrerit tellus libero vitae eros.
									</div>
								</div>
								<div className='offerts__card'>
									<span>Aktualne</span>
									<div>
										<MdOutlineUpdate className='offerts__icon-card' />
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis, lectus eu auctor
										scelerisque, enim enim ultricies arcu, at hendrerit tellus libero vitae eros.
									</div>
								</div>
								<div className='offerts__card'>
									<span>Testy</span>
									<div>
										<SiTestcafe className='offerts__icon-card' />
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis, lectus eu auctor
										scelerisque, enim enim ultricies arcu, at hendrerit tellus libero vitae eros.
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<footer>
					<div className='footer'>
						<div className='footer__description'>
							<h3>Pomoc</h3>
							<span>pomoc@learnpg.com</span>
							<span>33 330 90 90</span>
						</div>
						<div className='footer__description'>
							<h3>Menu</h3>
							<span>Strona Główna</span>
							<span>Zaloguj się</span>
							<span>Załóż konto</span>
							<span>Korzyści</span>
						</div>
						<div className='footer__description'>
							<h3>Social Media</h3>
							<span>Instagram</span>
							<span>Facebook</span>
							<span>YouTube</span>
							<span>TikTok</span>
							<span>LinkedIn</span>
						</div>
					</div>
				</footer>
			</main>
		</div>
	)
}

export default Main
