import React, { useState } from 'react'
import '../scss/_login.scss'
import { FaDatabase } from 'react-icons/fa'

const Login = () => {
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [message, setMessage] = useState('')

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
				const data = await response.json()
				localStorage.setItem('token', data.token)
				window.location.href = '/Dashboard'
			} else if (response.status === 401) {
				console.log('Invalid credentials')
			} else {
				console.log('Error logging in')
			}
		} catch (error) {
			setMessage('Network error')
			console.error(error)
		}
	}

	return (
		<div>
			<div className='nav'>
				<div className='nav__login-items'>
					<div className='nav__logo'>
						<FaDatabase />
					</div>
					<div className='nav__login-item'>Strona Główna</div>
				</div>
			</div>
			<div className='login'>
				<form onSubmit={handleSubmit}>
					<h1 className='login__header'>Zaloguj się</h1>
					<div className='login__block'>
						<label>
							Email<span className='login__important'> *</span>
							<input
								className='wrapper login__input'
								type='text'
								placeholder='Podaj swój adres email'
								value={user_email}
								onChange={event => {
									set_user_email(event.target.value)
								}}
							/>
						</label>
					</div>
					<div className='wrapper'>
						<div className='login__block'>
							<label>
								Hasło<span className='login__important'> *</span>
								<input
									className='wrapper login__input'
									type='password'
									placeholder='Podaj hasło'
									value={user_pwd}
									onChange={event => {
										set_user_pwd(event.target.value)
									}}
								/>
								<p>Zresetuj hasło</p>
							</label>
						</div>
					</div>
					<div className='wrapper'>
						<button className='login__btn' type='submit'>
							Zaloguj się
						</button>
						<p>
							Nie posiadasz konta? <span className='login__register-link'>Zaloguj się</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
