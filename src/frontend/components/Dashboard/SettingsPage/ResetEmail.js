import React, { useState } from 'react'
import '../../../scss/_reset.scss'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import axios from 'axios'
// import { useAuthNavigation } from '../../../../backend/guard/ProtectLink'
import { checkCorrectEmail, checkEmptyInput } from '../../../../backend/guard/Script'
// import { useEffect } from 'react'

function ResetEmail() {
	const API_URL = 'http://localhost:4000'
	const navigate = useNavigate()
	const [new_email, set_new_email] = useState('')
	const [outputErr, setOutputErr] = useState('')

	// const checkUser = useAuthNavigation()

	// useEffect(() => {
	// checkUser()
	// }, [])

	const handleSubmit = async e => {
		const handleCheckInput = checkEmptyInput(new_email)
		const handleCheckEmail = checkCorrectEmail(new_email)

		e.preventDefault()

		if (handleCheckInput) {
			setOutputErr(handleCheckInput)
		} else if (handleCheckEmail) {
			setOutputErr(handleCheckEmail)
		} else {
			try {
				const res = await axios.post(
					`${API_URL}/resetuseremail`,
					{ new_email },
					{
						headers: {
							'Content-Type': 'application/json',
						},
						withCredentials: true,
					}
				)

				if (res.status === 200 && res.data && res.data.error) {
					return setOutputErr('Podany adres E-mail jest zajęty')
				} else {
					// setOutputErr('Adres email został zaktualizowany')
					navigate('/login')
				}
			} catch (err) {
				console.error(err)
				setOutputErr('Wystąpił błąd podczas aktualizacji adresu email')
			}
		}
	}

	return (
		<div>
			<div className='nav-auth__auth-items'>
				<div className='nav-auth__auth-item--close'>
					<AiOutlineClose
						onClick={() => {
							navigate('/dashboard/settings')
						}}
					/>
				</div>
			</div>
			<div className='navigation'>
				<DashboardNav />
				<div className='section'>
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
							<div className='output-err'>{outputErr}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetEmail
