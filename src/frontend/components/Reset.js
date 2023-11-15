import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import { FaDatabase } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../../backend/guard/ProtectLink'

const Reset = () => {
	useEffect(() => {
		if (checkLogin()) {
			navigate('../Dashboard')
		} else {
			navigate('./')
		}
	}, [])

	const navigate = useNavigate()
	const [user_email, set_user_email] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [output, setOutput] = useState('')

	const checkEmail = () => {
		const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
		if (!validEmail.test(user_email)) {
			setOutput('Wprowadzony adres email jest nieprawidłowy')
		} else {
			setOutput('Twoja prośba o zresetowanie hasła została wysłana')
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		checkEmail()
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
						<h1 className='title-section'>Zresetuj hasło</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>Email</p>
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
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								Zresetuj hasło
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
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Reset
