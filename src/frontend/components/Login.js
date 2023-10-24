import React, { useState } from 'react'
import '../scss/_login.scss'

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
			<div className='login'>
				<p>Login</p>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='login__block'>
						<label>
							Email<span className='login__important'>*</span>
							<input
								className='wrapper login__input'
								type='text'
								placeholder='Enter your email'
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
								Password<span className='login__important'>*</span>
								<input
									className='wrapper login__input'
									type='password'
									placeholder='Enter your password'
									value={user_pwd}
									onChange={event => {
										set_user_pwd(event.target.value)
									}}
								/>
							</label>
						</div>
					</div>
					<div className='wrapper'>
						<button className='login__btn' type='submit'>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
