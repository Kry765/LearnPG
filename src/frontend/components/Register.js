import React, { useState } from 'react'
import '../scss/style.scss'
import '../scss/_register.scss'
import axios from 'axios'

const API_URL = 'http://localhost:4000/create'

function Register() {
	// const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [output, setOutput] = useState('')
	const [password, setPassword] = useState('')
	const [repeat_pwd, set_repeat_pwd] = useState('')

	const handleSubmit = async e => {
		await emptyInput()
		await checkEmail()
		await changePwd()

		e.preventDefault()
		const formData = { user_email, user_pwd }
		try {
			const res = await axios.post(API_URL, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status == 201) setOutput('Konto zostało utworzone')
			else if (res.status == 200) setOutput('Podany adres email jest już zajęty')
			else if (res.status == 500) setOutput('Wystąpił błąd')
		} catch (err) {
			console.error(err)
		}
	}

	const changePwd = () => {
		if (user_email == '' || user_pwd == '' || repeat_pwd == '') {
			setOutput('Uzupełnij brakujące pola')
		}
	}

	const emptyInput = () => {
		if (repeat_pwd !== user_pwd) {
			setOutput('Wprowadzone hasła są różne')
		}
	}

	const checkEmail = () => {
		const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
		if (!validEmail.test(user_email)) {
			setOutput('Wprowadzony adres email jest nieprawidłowy')
		}
	}

	// const handlePassword = event => {
	// 	const pwd = event.target.value
	// 	setPassword(pwd)
	// 	if (pwd.length >= 8) {
	// 		setPassword(`Wprowadzone hasło ma ${pwd}`)
	// 	}
	// }

	// handlePassword()

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
								<p>
									Email<span className='red'>*</span>
								</p>
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
								<p>
									Password<span className='red'>*</span>
								</p>
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
								<p>
									Repeat password<span className='red'>*</span>
								</p>
								<input
									type='password'
									className='register__input'
									placeholder='repeat password'
									value={repeat_pwd}
									onChange={event => {
										set_repeat_pwd(event.target.value)
									}}
								/>
							</label>
							<p>{password}</p>
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
						<p>{output}</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
