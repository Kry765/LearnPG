import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import axios from 'axios'
import { FaDatabase, AiOutlineClose } from '../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'
import { checkCorrectEmail, checkEmptyInput, checkRepeatPassword } from '../../backend/guard/Script'

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
		const handleCheckEmail = checkCorrectEmail(user_email)
		const handleCheckPasword = checkRepeatPassword(user_pwd, repeat_pwd)
		const handleCheckEmptyInput = checkEmptyInput(user_email, user_pwd, repeat_pwd)
		if (handleCheckEmptyInput || handleCheckPasword || handleCheckEmail) {
			return setOutput(handleCheckEmptyInput || handleCheckEmail || handleCheckPasword)
		}
		const formData = { user_email, user_pwd }
		try {
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
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
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
