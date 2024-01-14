import React, { useState } from 'react'
import '../../../scss/_reset.scss'
import { FaDatabase, AiOutlineClose } from '../../../../backend/guard/Icons'
import { useNavigate } from 'react-router-dom'
import { useAuthNavigation } from '../../../../backend/guard/ProtectLink'
import { useEffect } from 'react'

export default function Form() {
	const navigate = useNavigate()
	const [output] = useState('')
	const [user_textarea, set_user_textarea] = useState('')

	const checkUser = useAuthNavigation()
	useEffect(() => {
		checkUser()
	}, [])

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
					<form>
						<h1 className='title-section'>Kontakt</h1>
						<div className='flex-column'>
							<p>Masz pytania? Skontaktuj się z nami</p>
							<input type='text' className='max-form' placeholder='E-mail' />
							<input type='text' className='max-form' placeholder='Imię' />
							<textarea
								className='form-textarea max-form'
								name='message'
								placeholder='Wyślij wiadomość'
								value={user_textarea}
								onChange={event => {
									set_user_textarea(event.target.value)
								}}
							></textarea>
							<button className='btn-auth'>Wyślij wiadomość</button>
							<div className='output'>{output}</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
