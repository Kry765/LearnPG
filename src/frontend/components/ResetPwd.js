import React, { useEffect, useState } from 'react'
import '../scss/_reset.scss'
import '../scss/_reset-email.scss'
import axios from 'axios'

function ResetPwd() {
	const API_URL = 'http://localhost:4000'
	const [repeat_pwd, set_repeat_pwd] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [output, setOutput] = useState('')

	const checkPwd = () => {
		if (repeat_pwd !== user_pwd) {
			setOutput('Wprowadzone hasła są różne')
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		await checkPwd()
		try {
			await axios.post(API_URL + '/resetuserpwd', {
				pwd: user_pwd,
			})
			setOutput('Adres email został zaktualizowany')
		} catch (err) {
			console.error(err)
			setOutput('Wystąpił błąd podczas aktualizacji adresu email')
		}
	}

	return (
		<div>
			<div className='flex-center'>
				<div className='flex-center box-auth'>
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
