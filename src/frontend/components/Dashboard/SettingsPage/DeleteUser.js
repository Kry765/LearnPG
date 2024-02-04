import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DashboardNav } from '../StartPage/DashboardNav'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { checkCorrectEmail, checkEmptyInput } from '../../../../backend/guard/Script'

function DeleteUser() {
	const API_URL = 'http://localhost:4000'
	const [email, setEmail] = useState('')
	const [outputErr, setOutputErr] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		const handleCheckInput = checkEmptyInput(email)
		const handleCheckEmail = checkCorrectEmail(email)
		e.preventDefault()
		if (handleCheckInput) {
			return setOutputErr(handleCheckInput)
		} else if (handleCheckEmail) {
			return setOutputErr(handleCheckEmail)
		} else {
			try {
				const response = await axios.post(
					API_URL + '/deleteuser',
					{ user: { email } },
					{
						headers: {
							'Content-Type': 'application/json',
						},
						withCredentials: true,
					}
				)
				if (response.status === 200) {
					navigate('/login')
				} else {
					return setOutputErr('Wprowadź swój adres E-mail')
				}
			} catch (error) {
				return setOutputErr('Wprowadź swój adres E-mail')
			}
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
				<div className='section'>
					<div className='belt-auth-right'></div>
					<div className='belt-auth-left'></div>
					<form onSubmit={handleSubmit}>
						<h1 className='title-section'>Skasuj konto</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p className='text-center'>
										W celu potwierdzenia skasowania konta, prosze o podanie swojego adres E-mail
									</p>
									<input
										className='input-auth'
										type='text'
										placeholder='Podaj  adres email'
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
								</label>
							</div>
						</div>
						<div className='flex-column'>
							<button className='btn-auth' type='submit'>
								Skasuj
							</button>
						</div>
						<div className='output-err'>{outputErr}</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default DeleteUser
