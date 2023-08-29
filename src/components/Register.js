import React, { useState } from 'react'
import '../scss/style.scss'
import '../scss/_register.scss'
import axios from 'axios'

const API_URL = 'http://localhost:4000/create'

function Register() {
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const formData = { user_email, user_pwd }
		axios
			.post(`${API_URL}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	return (
		<div>
			<div className='wrapper register'>
				<p>Sign in to Account</p>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='register__block'>
						<div className='wrapper'>
							<label>
								<p>Email*</p>
								<input
									className='register__input'
									type='text'
									placeholder='email'
									value={user_email}
									onChange={event => {
										set_user_email(event.target.value)
									}}
								/>
							</label>
						</div>
						<div className='wrapper'>
							<label>
								<p>Password*</p>
								<input
									className='register__input'
									type='password'
									placeholder='password'
									value={user_pwd}
									onChange={event => {
										set_user_pwd(event.target.value)
									}}
								/>
							</label>
						</div>
						<div className='wrapper'>
							<label>
								<p>Repeat password</p>
								<input type='password' className='register__input' placeholder='repeat password' />
							</label>
						</div>
						<div className='wrapper register__checkbox'>
							<label>
								<span className='register__check'>Accept rule</span>
								<input className='register__check' type='checkbox' />
							</label>
						</div>
						<div className='wrapper'>
							<button type='submit' className='register__btn'>
								Register
							</button>
						</div>

						<div className='register__login-link'>Do you have Account? Log in</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
