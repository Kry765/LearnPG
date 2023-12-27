import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import { FaDatabase } from 'react-icons/fa'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:4000/create'

function Register() {
	const navigate = useNavigate()
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [output, setOutput] = useState('')
	const [password, setPassword] = useState('')
	const [repeat_pwd, set_repeat_pwd] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		const formData = { user_email, user_pwd }
		try {
			const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
			if (user_email === '' || user_pwd === '' || repeat_pwd === '') {
				return setOutput('Uzupełnij brakujące pola')
			} else if (!validEmail.test(user_email)) {
				return setOutput('Wprowadzony adres email jest nieprawidłowy')
			} else if (repeat_pwd !== user_pwd) {
				return setOutput('Wprowadzone hasła są różne')
			}
			const res = await axios.post(API_URL, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 201) {
				return setOutput('Konto zostało utworzone')
			} else if (res.status === 200) {
				return setOutput('Podany adres email jest już zajęty')
			} else if (res.status === 500) {
				return setOutput('Wystąpił błąd')
			}
		} catch (err) {
			console.error(err)
		}
	}

	const handlePassword = event => {
		const pwd = event.target.value
		setPassword(pwd)
		if (pwd.length >= 8) {
		}
	}

	return (
		<div>
			<div className='nav-auth'>
				<div className='nav-auth__auth-items'>
					<div className='nav-auth__auth-item'>
						<FaDatabase
							onClick={() => {
								navigate('/')
							}}
						/>
					</div>
					<div className='nav-auth__auth-item--close'>
						<AiOutlineClose
							onClick={() => {
								navigate('/')
							}}
						/>
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

							<button type='submit' className='btn-auth'>
								Zarejestruj się
							</button>
							<div>
								Posiadasz już konto?{' '}
								<span
									className='link-auth'
									onClick={() => {
										navigate('/login')
									}}
								>
									Zaloguj się
								</span>
							</div>
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
