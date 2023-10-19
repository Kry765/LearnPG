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
import { FiMail } from 'react-icons/fi'
import { AiFillPhone } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
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
						<div className='header__belt'></div>
						<div className='header__left-box'>
							<p className='header__title'>LearnPG</p>
							<p className='header__subtitle'>Ucz się na bieżąco PostgreSQL</p>
							<p className='header__subtitle'> Zdobądź dodatkową wiedzę z zakresu relacyjnych baz danych</p>
							<button className='header__btn'>Rozpocznij nauke</button>
						</div>
						<div className='header__right-box'>
							<div>
								<img src={cloud} alt='cloud' className='header__img' />
								<div className='opacity-img'></div>
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
									<p>Korzystaj z komputera bądź urządzenia mobilnego.</p>
								</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<div>
										<AiOutlineFieldTime className='offerts__icon' />
									</div>
								</div>
								<div className='offerts__card-description'>Korzystaj o każdej porze i w każdym miejscu.</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<BsFillCalendarCheckFill className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>Rozwijaj swoje kompetencje za pomocą testów.</div>
							</div>
							<div className='offerts__section-card'>
								<div className='offerts__card'>
									<AiFillSave className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>Zapisuj swoje rezultaty i kontroluj swój proces nauki.</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<h1 className='contact__title'>Kontakt</h1>
					<div className='contact'>
						<div className='contact__box-right'>
							<input type='text' className='contact__input-email' placeholder='Adres E-mail' />
							<input type='text' className='contact__input-email' placeholder='Imię' />
							<textarea className='contact__textarea' placeholder='Wyślij wiadomość'></textarea>
							<button className='contact__btn'>Wyślij</button>
						</div>
						<div className='contact__box-left'>
							<h3 className='contact__contact-header'>Masz pytania badź problemy? Skontaktuj się z nami</h3>
							<div className='contact__description'>
								<FiMail className='contact__contact-icon' />
								<p>krzysztofkleka91@gmail.com</p>
							</div>
							<div className='contact__description'>
								<AiFillPhone className='contact__contact-icon' />
								<p>+48 573 226 219</p>
							</div>
							<div className='contact__description'>
								<BsDiscord className='contact__contact-icon' />
								<p>Kry765#3886</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Main
