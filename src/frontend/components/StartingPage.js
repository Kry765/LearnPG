import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { checkCorrectEmail, checkEmptyInput, sendEmail } from '../../backend/guard/Script'
import {
	RxHamburgerMenu,
	FaDatabase,
	RiArrowDownSLine,
	MdOutlineTouchApp,
	AiOutlineFieldTime,
	BsFillCalendarCheckFill,
	AiFillSave,
	FiMail,
	AiFillPhone,
	AiOutlineClose,
	BsDiscord,
} from '../../backend/guard/Icons'

function StartingPage() {
	const [user_email, set_user_email] = useState('')
	const [user_input, set_user_input] = useState('')
	const [user_textarea, set_user_textarea] = useState('')
	const [output, setOutput] = useState('')
	const [openNav, setOpenNav] = useState('')
	const [scroll] = useState(900)
	const [changeIcon, setChangeIcon] = useState('')
	const navigate = useNavigate()

	const handleSendMessage = async form => {
		const checkEmail = checkCorrectEmail(user_email)
		const checkInput = checkEmptyInput(user_email, user_input, user_textarea)

		if (checkInput || checkEmail) {
			setOutput(checkEmail || checkInput)
			return
		}
		try {
			await sendEmail(form)
			setOutput('Mail wysłany')
		} catch (error) {
			setOutput('Wystąpił błąd')
			console.error(error)
		}
	}

	const scrollDown = () => {
		window.scrollBy({
			top: scroll,
			behavior: 'smooth',
		})
	}

	return (
		<React.Fragment>
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
							{changeIcon ? (
								<AiOutlineClose
									className='nav__close-icon'
									onClick={() => {
										setOpenNav(false)
										setChangeIcon(false)
									}}
								/>
							) : (
								<RxHamburgerMenu
									className={openNav ? 'nav__mobile-items' : ''}
									onClick={() => {
										setOpenNav(!openNav)
										setChangeIcon(true)
									}}
								/>
							)}
						</div>
					</div>
					<div className={openNav ? 'nav__mobile-items' : 'nav__close-mobile-items'}>
						<div className='nav__mobile-item'>
							<Link to='home' smooth={true} duration={500}>
								Strona Główna
							</Link>
						</div>

						<div className='nav__mobile-item'>
							<Link to='offerts' smooth={true} duration={500}>
								Korzyści
							</Link>
						</div>

						<div className='nav__mobile-item'>
							<Link to='contact' smooth={true} duration={500}>
								Kontakt
							</Link>
						</div>

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
						<div className='flex-center header__box'>
							<div className='header__opactiy-box'></div>
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
						<div className='header__arrow-down'>
							<a>
								<RiArrowDownSLine onClick={scrollDown} />
							</a>
						</div>
					</div>
				</section>
				<section id='offerts'>
					<div className='offerts'>
						<div className='belt-right'></div>
						<div className='belt-left'></div>
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
					</div>
				</section>
				<section>
					<form
						onSubmit={e => {
							e.preventDefault()
							handleSendMessage(e)
						}}
					>
						<h2 className='title' id='contact'>
							Kontakt
						</h2>
						<div className='flex-center contact'>
							<div className='flex-center contact__box-right'>
								<input
									type='text'
									className='form-input'
									placeholder='Adres E-mail'
									name='from_name'
									value={user_email}
									onChange={event => {
										set_user_email(event.target.value)
									}}
								/>
								<input
									type='text'
									name='to_name'
									className='form-input'
									placeholder='Imię'
									value={user_input}
									onChange={event => {
										set_user_input(event.target.value)
									}}
								/>
								<textarea
									className='form-input form-textarea'
									name='message'
									placeholder='Wyślij wiadomość'
									value={user_textarea}
									onChange={event => {
										set_user_textarea(event.target.value)
									}}
								></textarea>
								<p>Przed wysłaniem wiadomości uzupełnij pola</p>
								{output}
								<button className='contact__contact-btn btn'>Wyślij</button>
							</div>
							<div className='contact__box-left'>
								<h3 className='contact__contact-header'>Masz jakieś pytania? Skontaktuj się z nami</h3>
								<div className='contact__description'>
									<FiMail className='contact__contact-icon' />
									<span>krzysztofkleka91@gmail.com</span>
								</div>
								<div className='contact__description'>
									<AiFillPhone className='contact__contact-icon' />
									<p>+48 123 456 789</p>
								</div>
								<div className='contact__description'>
									<BsDiscord className='contact__contact-icon' />
									<p>Kry765#3886</p>
								</div>
							</div>
						</div>
					</form>
				</section>
			</main>
			<footer>
				<p className='footer'>Kry765 2023 | &copy; Wszelkie prawa zastrzeżone</p>
			</footer>
		</React.Fragment>
	)
}

export default StartingPage
