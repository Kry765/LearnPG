import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineClose, FaDatabase } from '../../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'

function Root() {
	const navigate = useNavigate()
	const [admin_email, set_admin_email] = useState('')
	const [admin_pwd, set_admin_pwd] = useState('')
	const [output, setOutput] = useState('')
	const [outputErr, setOutputErr] = useState('')
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:4000/rootlogin',
				{
					admin_email,
					admin_pwd,
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
				window.location.href = '/Adminpage'
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
						<h1 className='title-section'>Panel Administracyjny</h1>
						<div className='flex-center direction-column'>
							<div className='space-auth'>
								<label>
									<p>
										Email<span className='complete'> *</span>
									</p>
									<input
										className='input-auth'
										type='text'
										placeholder='Podaj swój adres email'
										value={admin_email}
										onChange={event => {
											set_admin_email(event.target.value)
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
										value={admin_pwd}
										onChange={event => {
											set_admin_pwd(event.target.value)
										}}
									/>
								</label>
							</div>
						</div>
						<div className='flex-center direction-column'>
							<button className='btn-auth' type='submit'>
								Zaloguj się
							</button>
							<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Root
