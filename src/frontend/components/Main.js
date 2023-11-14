import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaDatabase } from 'react-icons/fa'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineTouchApp } from 'react-icons/md'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { AiFillSave } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import { AiFillPhone } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import '../scss/_main.scss'
import { Link, animateScroll as scroll } from 'react-scroll'

function Main() {
	const [openNav, setOpenNav] = useState('')
	const navigate = useNavigate()

	return (
		<div>
			<nav>
				<div className='nav'>
					<div className='flex-end'>
						<div className='nav__desktop-item'>
							<Link to='offerts' smooth={true} duration={500}>
								Korzyści
							</Link>
						</div>
						<div className='nav__desktop-item'>
							<Link to='contact' smooth={true} duration={500}>
								Kontakt
							</Link>
						</div>
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
						<div className='nav__bottom-line'></div>
						<div className='nav__mobile-item'>Korzyści</div>
						<div className='nav__bottom-line'></div>
						<div className='nav__mobile-item'>Kontakt</div>
						<div className='nav__bottom-line'></div>
						<div
							className='nav__mobile-item'
							onClick={() => {
								navigate('/Login')
							}}
						>
							Zaloguj się
						</div>
						<div className='nav__bottom-line'></div>
						<div
							className='nav__mobile-item'
							onClick={() => {
								navigate('/Register')
							}}
						>
							Zalóż konto
						</div>
						<div className='nav__bottom-line'></div>
					</div>
					<div className='nav__logo'>
						<span>
							<Link to='home' smooth={true} duration={500}>
								<FaDatabase />
							</Link>
						</span>
					</div>
				</div>
			</nav>
			<main>
				<section>
					<div className='flex-center header' id='home'>
						<div className='header__opacity-box'></div>
						<div className='flex-center header__left-box'>
							<h1 className='header__title-header'>LearnPG</h1>
							<p className='header__subtitle'>Ucz się na bieżąco PostgreSQL</p>
							<p className='header__subtitle'> Zdobądź dodatkową wiedzę z zakresu relacyjnych baz danych</p>
							<button
								className='header__register-btn btn'
								onClick={() => {
									navigate('/Register')
								}}
							>
								Rozpocznij nauke
							</button>
						</div>
						<div className='header__arrow-down' id='offerts'>
							<Link to='offerts' smooth={true} duration={500}>
								<RiArrowDownSLine />
							</Link>
						</div>
					</div>
				</section>
				<section>
					<div className='offerts'>
						<h2 className='title'>Korzyści</h2>
						<div className='offerts__cards'>
							<div className='offerts__section-card'>
								<div className='flex-center offerts__card'>
									<div>
										<MdOutlineTouchApp className='offerts__icon' />
									</div>
								</div>
								<div className='offerts__card-description'>
									<p>Korzystaj z komputera bądź urządzenia mobilnego.</p>
								</div>
							</div>
							<div className='offerts__section-card'>
								<div className='flex-center offerts__card'>
									<div>
										<AiOutlineFieldTime className='offerts__icon' />
									</div>
								</div>
								<div className='offerts__card-description'>Korzystaj o każdej porze i w każdym miejscu.</div>
							</div>
							<div className='offerts__section-card'>
								<div className='flex-center offerts__card'>
									<BsFillCalendarCheckFill className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>Rozwijaj swoje kompetencje za pomocą testów.</div>
							</div>
							<div className='offerts__section-card'>
								<div className='flex-center offerts__card '>
									<AiFillSave className='offerts__icon' />
								</div>
								<div className='offerts__card-description'>Zapisuj swoje rezultaty i kontroluj swój proces nauki.</div>
							</div>
						</div>
						<div className='contact__arrow-down' id='offerts'>
							<Link to='contact' smooth={true} duration={500}>
								<RiArrowDownSLine />
							</Link>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h2 className='title' id='contact'>
							Kontakt
						</h2>
					</div>
					<div className='flex-center contact'>
						<div className='flex-center contact__box-right'>
							<input type='text' className='contact__input contact__email' placeholder='Adres E-mail' />
							<input type='text' className='contact__input contact__email' placeholder='Imię' />
							<textarea className='contact__input contact__textarea' placeholder='Wyślij wiadomość'></textarea>
							<button className='contact__contact-btn btn'>Wyślij</button>
						</div>
						<div className='contact__box-left'>
							<h3 className='contact__contact-header'>Masz jakieś pytania? Skontaktuj się z nami</h3>
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
			<footer>
				<div className='footer flex-center'>
					<p>Kry765 2023 | &copy; Wszelkie prawa zastrzeżone</p>
				</div>
			</footer>
		</div>
	)
}

export default Main
