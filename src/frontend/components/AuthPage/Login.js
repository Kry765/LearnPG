import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../scss/_reset.scss'
import { AiOutlineClose, FaDatabase } from '../../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'

function Login() {

	const navigate = useNavigate()
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [output, setOutput] = useState('')
	const [outputErr, setOutputErr] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:4000/signin',
				{
					user_email,
					user_pwd,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			if (response.status === 200) {
				const token = response.data.token
				document.cookie = `token=${token}; path=/;`
				localStorage.setItem('token', token)
				axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
				window.location.href = '/Dashboard'
			} else {
				setOutput('')
				return setOutputErr('Wystąpił błąd')
			}
		} catch (error) {
			setOutput('')
			setOutputErr('Nieprawidłowy adres E-mail lub hasło')
		}
	}

	return (
		<div>
			<div className='nav-auth'>
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
			<div className='flex-center'>
				<div className='box-auth'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<form onSubmit={handleSubmit}>
						<h1 className='title-section'>Zaloguj się</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>
										Email<span className='complete'> *</span>
									</p>
									<input
										className='input-auth'
										type='text'
										placeholder='Podaj swój adres email'
										value={user_email}
										onChange={event => {
											set_user_email(event.target.value)
										}}
									/>
								</label>
							</div>
							<div className='space-auth'>
								<label>
									<p>
										Hasło<span className='complete'> *</span>
									</p>
									<input
										className='input-auth'
										type='password'
										placeholder='Podaj hasło'
										value={user_pwd}
										onChange={event => {
											set_user_pwd(event.target.value)
										}}
									/>
								</label>
							</div>
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								Zaloguj się
							</button>
							<p>
								Nie posiadasz konta?{' '}
								<span
									className='link-auth'
									onClick={() => {
										navigate('/register')
									}}
								>
									Zarejestruj się
								</span>
							</p>
							<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
