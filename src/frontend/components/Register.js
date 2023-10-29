import React, { useState } from 'react'
import '../scss/_reset.scss'
import { FaDatabase } from 'react-icons/fa'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'

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
						<h1 className='title-section'>Zarejestruj się</h1>
						<div className='flex-column'>
							<label>
								<p>
									Email<span className='complete'>*</span>
								</p>
								<input
									className='input-auth'
									type='text'
									placeholder='Adres email'
									value={user_email}
									onChange={event => {
										set_user_email(event.target.value)
									}}
								/>
							</label>
							<div className='space-auth'>
								<label>
									<p>
										Hasło<span className='complete'>*</span>
									</p>
									<input
										className='input-auth'
										type='password'
										placeholder='Hasło'
										value={user_pwd}
										onChange={event => {
											set_user_pwd(event.target.value)
										}}
									/>
								</label>
							</div>
							<div className='space-auth'>
								<label>
									<p>
										Powtórz hasło<span className='complete'>*</span>
									</p>
									<input
										type='password'
										className='input-auth'
										placeholder='Powtórz hasło'
										value={repeat_pwd}
										onChange={event => {
											set_repeat_pwd(event.target.value)
										}}
									/>
								</label>
								<p>{password}</p>
							</div>
							<div className='space-auth'>
								<label>
									<span className='register__check'>Akceptuje regulamin</span>
									<input className='register__check' type='checkbox' />
								</label>
							</div>
							<button type='submit' className='btn-auth'>
								Zarejestruj się
							</button>
							<div>
								Posiadasz już konto? <span className='link-auth'>Zaloguj się</span>
							</div>
							<div>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
