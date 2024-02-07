import React, { useState } from 'react'
import axios from 'axios'
import { checkCorrectEmail, checkEmptyInput, checkRepeatPassword, checkStrongPwd } from '../../backend/guard/Script'

export default function AdminPage() {
	const [user_email, set_user_email] = useState('')
	const [repeat_pwd, set_repeat_pwd] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	// const handleCheckEmail = checkCorrectEmail(user_email)
	// const handleCheckEmptyInput = checkEmptyInput(user_email, user_pwd, repeat_pwd)

	const checkEmail = () => {
		return checkCorrectEmail(user_email)
	}

	const checkInput = () => {
		return checkEmptyInput(user_email, user_pwd)
	}

	const addUser = async e => {
		e.preventDefault()

		if (checkInput()) {
			alert('Podane pole jest puste')
			return
		}

		if (checkEmail()) {
			alert('Nieprawidłowy adres email')
			return
		}

		const formData = { user_email, user_pwd }
		const API_URL = 'http://localhost:4000/create'

		try {
			const res = await axios.post(API_URL, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (res.status === 201) {
				alert('Konto stworzone')
			} else if (res.status === 200) {
				alert('Już istnieje adres Email')
			} else if (res.status === 500) {
				alert('Wystąpił błąd')
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div>
			<h2>Dodaj konto</h2>
			<form onSubmit={addUser}>
				<input
					type='text'
					placeholder='adres-email'
					value={user_email}
					onChange={event => {
						set_user_email(event.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='hasło'
					value={user_pwd}
					onChange={event => {
						set_user_pwd(event.target.value)
					}}
				/>
				<button type='submit'>Dodaj konto</button>
			</form>
		</div>
	)
}
