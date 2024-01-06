import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import { FaDatabase, AiOutlineClose } from '../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ResetEmail() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [new_email, set_new_email] = useState('')
	const [output, setOutput] = useState('')

	const checkEmail = () => {
		const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
		if (!validEmail.test(new_email)) {
			setOutput('Wprowadzony adres email jest nieprawidłowy')
		} else {
			setOutput('Twoja prośba o zresetowanie hasła została wysłana')
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		checkEmail()
		try {
			await axios.post(API_URL + '/resetpwd', {
				new_email: new_email,
			})
			setOutput('Adres email został zaktualizowany')
		} catch (err) {
			console.error(err)
			setOutput('Wystąpił błąd podczas aktualizacji adresu email')
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
								navigate('/dashboard/settings')
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
						<h1 className='title-section'>Zmień E-mail</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>Nowy Email</p>
									<input
										className='input-auth'
										type='text'
										placeholder='Podaj nowy adres email'
										value={new_email}
										onChange={event => set_new_email(event.target.value)}
									/>
								</label>
							</div>
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								Zresetuj
							</button>
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetEmail
