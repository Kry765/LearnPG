import React, { useState } from 'react'

function Login() {
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const formData = { user_email, user_pwd }
		fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then(response => {
				if (response.redirected) {
					window.location.href = response.url // Przekierowanie do panelu głównego
				}
			})
			.catch(error => {
				console.log(error)
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
