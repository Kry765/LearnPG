import React, { useState } from 'react'
import '../../../scss/_reset.scss'
import axios from 'axios'
import { AiOutlineClose, FaDatabase } from '../../../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'
// import { useAuthNavigation } from '../../../../backend/guard/ProtectLink'
// import { useEffect } from 'react'

function ResetPwd() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [user_pwd, set_user_pwd] = useState('')
	const [repeat_pwd, set_repeat_pwd] = useState('')
	const [output, setOutput] = useState('')
	// const checkUser = useAuthNavigation()
	// useEffect(() => {
		// checkUser()
	// }, [])

	const handleSubmit = e => {
		e.preventDefault()

		try {
			if (repeat_pwd !== user_pwd) {
				setOutput('Wprowadzone hasła są różne')
			} else {
				axios.post(API_URL + '/resetuserpwd', {
					user_pwd: user_pwd,
				})
				setOutput('Adres email został zaktualizowany')
			}
		} catch (err) {
			console.error(err)
			setOutput('Wystąpił błąd podczas aktualizacji adresu email')
		}
	}

	return (
		<div>
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
			<div className='flex-center'>
				<div className='flex-center box-auth'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<form onSubmit={handleSubmit}>
						<h1 className='title-section'>Zmień hasło</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>Wprowadź hasło</p>
									<input
										className='input-auth'
										type='password'
										placeholder='Wprowadź hasło'
										value={user_pwd}
										onChange={event => set_user_pwd(event.target.value)}
									/>
								</label>
							</div>
							<div className='space-auth'>
								<label>
									<p>Powtórz hasło</p>
									<input
										className='input-auth'
										type='password'
										placeholder='Powtórz hasło'
										value={repeat_pwd}
										onChange={event => set_repeat_pwd(event.target.value)}
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

export default ResetPwd
