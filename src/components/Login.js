import React, { useState } from 'react'

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
