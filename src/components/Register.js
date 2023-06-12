import React, { useState } from 'react'

function Register() {
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const formData = { user_email, user_pwd }
		fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	return (
		<div>
			<p>Register</p>
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
				<input type='repeat password' placeholder='repeat password' />
				<label>
					Accept rule
					<input type='checkbox' />
				</label>
				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default Register
