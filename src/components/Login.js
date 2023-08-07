import React, { useState } from 'react'
const API_URL = 'http://localhost:4000'

function Login() {
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		fetch(`${API_URL}/log`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user_email, user_pwd }),
		})
			.then(response => {
				if (response.ok) {
					response.json(data => {
						const token = data.token
						// Store the token securely (e.g., in local storage or a secure cookie)
						localStorage.setItem('token', token)
						console.log('Zalogowano pomyślnie')
					})
				} else {
					throw new Error('Nieprawidłowy login lub hasło')
				}
			})
			.catch(error => {
				console.error('Error:', error.message)
			})
	}

	return (
		<div>
			<p>Login</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='email'
					value={user_email}
					onChange={event => {
						set_user_email(event.target.value)
					}}
				/>
				<input
					type='password'
					placeholder='password'
					value={user_pwd}
					onChange={event => {
						set_user_pwd(event.target.value)
					}}
				/>

				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export default Login
