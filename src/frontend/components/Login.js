import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import { FaDatabase } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../backend/guard/ProtectLink'

const Login = () => {
	useEffect(() => {
		if (checkLogin()) {
			navigate('../Dashboard')
		} else {
			navigate('./')
		}
	})

	const navigate = useNavigate()
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [message, setMessage] = useState('')
	const [output, setOutput] = useState('')

	const checkEmail = () => {
		const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
		if (!validEmail.test(user_email)) {
			setOutput('Wprowadzony adres email jest nieprawidłowy')
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await fetch('http://localhost:4000/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ user_email, user_pwd }),
			})

			if (response.ok) {
				checkEmail()
				const data = await response.json()
				localStorage.setItem('token', data.token)
				window.location.href = '/Dashboard'
			} else if (response.status === 401) {
				setOutput('Nieprawidłowy adres E-mail lub hasło')
			} else {
				setOutput('Wystąpił błąd')
			}
		} catch (error) {
			setMessage('Wystąpił błąd')
			console.error(error)
		}
	}

	return (
		<div>
			<div className='nav-auth'>
				<div className='nav-auth__auth-items'>
					<div className='nav-auth__auth-item'>
						<FaDatabase />
					</div>
					<div className='nav-auth__auth-item--close'>
						<AiOutlineClose />
					</div>
				</div>
			</div>
			<div className='flex-center'>
				<div className='flex-center box-auth'>
					<form onSubmit={handleSubmit}>
						<h1 className='title-section'>Zaloguj się</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>
										Email<span className='complete'> *</span>
									</p>
									<input
										className='input-auth'
										type='text'
										placeholder='Podaj swój adres email'
										value={user_email}
										onChange={event => {
											set_user_email(event.target.value)
										}}
									/>
								</label>
							</div>
							<div className='space-auth'>
								<label>
									<p>
										Hasło<span className='complete'> *</span>
									</p>
									<input
										className='input-auth'
										type='password'
										placeholder='Podaj hasło'
										value={user_pwd}
										onChange={event => {
											set_user_pwd(event.target.value)
										}}
									/>
								</label>
								<p>Zresetuj hasło</p>
							</div>
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								Zaloguj się
							</button>
							<p>
								Nie posiadasz konta?{' '}
								<span
									className='link-auth'
									onClick={() => {
										navigate('../register')
									}}
								>
									Zarejestruj się
								</span>
							</p>
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
