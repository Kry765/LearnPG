import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { checkEmptyInput, checkRepeatPassword, checkStrongPwd } from '../../../../backend/guard/Script'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'

function ResetPwd() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [user_pwd, set_user_pwd] = useState('')
	const [repeat_pwd, set_repeat_pwd] = useState('')
	const [output, setOutput] = useState('')
	const [outputErr, setOutputErr] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		const handleCheckInput = checkEmptyInput(user_pwd, repeat_pwd)
		const handlecheckRepeatPassword = checkRepeatPassword(user_pwd, repeat_pwd)
		const handlecheckStrongPwd = checkStrongPwd(user_pwd, repeat_pwd)

		try {
			if (handleCheckInput) {
				setOutput('')
				setOutputErr('Uzupełnij brakujące pola')
			} else if (handlecheckRepeatPassword) {
				setOutput('')
				setOutputErr('Wprowadzone hasła są różne')
			} else if (handlecheckStrongPwd) {
				setOutput('')
				setOutputErr(
					'Twoje hasło jest za słabe musi się składać z minimum 8 znaków, posiadać małe i duże litery, cyfry oraz znaki specialne'
				)
			} else {
				axios.post(
					API_URL + '/resetuserpwd',
					{ user_pwd },
					{
						headers: {
							'Content-Type': 'application/json',
						},
						withCredentials: true,
					}
				)
				setOutput('Hasło zostało zmienione')
				navigate('/Login')
			}
		} catch (err) {
			console.error(err)
			setOutput('Wystąpił błąd podczas aktualizacji adresu email')
		}
	}

	return (
		<div>
			<div className='nav-auth__auth-item--close'>
				<AiOutlineClose
					onClick={() => {
						navigate('/dashboard/settings')
					}}
				/>
			</div>
			<div className='navigation'>
				<DashboardNav />
				<div className='section flex-center'>
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
							<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetPwd
