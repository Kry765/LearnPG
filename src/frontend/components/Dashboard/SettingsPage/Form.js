import React, { useState } from 'react'
import '../../../scss/_reset.scss'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { checkCorrectEmail, checkEmptyInput, sendEmail } from '../../../../backend/guard/Script'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'

export default function Form() {
	const navigate = useNavigate()
	const [user_email, set_user_email] = useState('')
	const [user_input, set_user_input] = useState('')
	const [user_textarea, set_user_textarea] = useState('')
	const [outputErr, setOutputErr] = useState('')
	const [output, setOutput] = useState('')

	const handleSendMessage = async form => {
		const checkEmail = checkCorrectEmail(user_email)
		const checkInput = checkEmptyInput(user_email, user_input, user_textarea)

		if (checkInput || checkEmail) {
			setOutputErr(checkEmail || checkInput)
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
	return (
		<div>
			<div className='nav-auth__auth-items'>
				<div className='nav-auth__auth-item--close'>
					<AiOutlineClose
						onClick={() => {
							navigate('/dashboard/settings')
						}}
					/>
				</div>
			</div>
			<div className='navigation'>
				<DashboardNav />
				<div className='section'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<form
						onSubmit={e => {
							e.preventDefault()
							handleSendMessage(e)
						}}
					>
						<h1 className='title-section'>Kontakt</h1>
						<div className='flex-column form-space'>
							<p>Masz pytania? Skontaktuj się z nami</p>
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
							<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
							<button className='btn-auth'>Wyślij wiadomość</button>
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
