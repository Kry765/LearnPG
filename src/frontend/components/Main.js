import React, { useState } from 'react'
import '../scss/_main.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaDatabase } from 'react-icons/fa'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineTouchApp } from 'react-icons/md'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { AiFillSave } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import cloud from '../image/cloud.jpg'

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
							className='nav__desktop-item--gray-contrast'
							onClick={() => {
								navigate('/Login')
							}}
						>
							Zaloguj się
						</div>
						<div
							className='nav__desktop-item--blue-contrast'
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
					<div className='header'>
						<div className='header__left-box'>
							<p className='header__title'>LearnPG</p>
							<p className='header__subtitle'>Ucz się na bieżąco PostgreSQL</p>
							<p className='header__subtitle'> Zdobądź dodatkową wiedzę z zakresu relacyjnych baz danych</p>
							<button className='header__btn'>Rozpocznij nauke</button>
						</div>
						<div className='header__right-box'>
							<div>
								<img src={cloud} alt='cloud' className='header__img' />
							</div>
						</div>
						<div className='header__arrow-down'>
							<RiArrowDownSLine />
						</div>
					</div>
				</section>
				<section>
					<div className='offerts'>
						<h1 className='title'>Korzyści</h1>
						<div className='offerts__cards'>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<div>
										<MdOutlineTouchApp className='offerts__icon' />
									</div>
								</div>
								<div className='offerts__card-description'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus lacus. Sed mi ligula,
										aliquam in ornare nec, porttitor egestas purus. Donec quis luctus nibh.
									</p>
								</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<div>
										<AiOutlineFieldTime className='offerts__icon' />
									</div>
								</div>
								<div className='offerts__card-description'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus lacus. Sed mi ligula,
									aliquam in ornare nec, porttitor egestas purus. Donec quis luctus nibh.
								</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<BsFillCalendarCheckFill className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus lacus. Sed mi ligula,
									aliquam in ornare nec, porttitor egestas purus. Donec quis luctus nibh.
								</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<AiFillSave className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus lacus. Sed mi ligula,
									aliquam in ornare nec, porttitor egestas purus. Donec quis luctus nibh.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className='contact'>
						<h1>Kontakt</h1>
						<div className='contact__box-right'>
							<input type='text' className='contact__input-email' />
							<textarea className='contact__textarea'></textarea>
						</div>
						<div className='contact__box-left'></div>
					</div>
				</section>
			</main>
			{/*	<footer>
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
				</footer> */}
		</div>
	)
}

export default Main
