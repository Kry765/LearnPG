import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { checkCorrectEmail, checkEmptyInput, checkRepeatPassword, checkStrongPwd } from '../../backend/guard/Script'

export default function AdminPage() {
	const [user_email, set_user_email] = useState('')
	const [topicName, setTopicName] = useState('')
	const [topicDescription, setTopicDescription] = useState('')
	const [user_pwd, set_user_pwd] = useState('')
	const [users, setUsers] = useState([])

	const API_URL = 'http://localhost:4000'

	useEffect(() => {
		getUser()
	}, [])

	const checkEmail = () => {
		return checkCorrectEmail(user_email)
	}

	const checkInput = () => {
		return checkEmptyInput(user_email, user_pwd)
	}

	const handleNewTopic = async e => {
		e.preventDefault()
		const formTopics = { topicName, topicDescription }
		const res = await axios.post(API_URL + '/addnewtopic', formTopics, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	const getUser = () => {
		axios
			.get(API_URL + '/getUser')
			.then(response => {
				setUsers(response.data.users)
			})
			.catch(error => {
				console.error('Błąd zapytania:', error)
			})
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

		try {
			const res = await axios.post(API_URL + '/create', formData, {
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

	const deleteUser = () => {}

	return (
		<div className='flex'>
			<div>
				<div>
					<h2>Pobierz wszystkich użytkowników</h2>

					{/* <button onClick={getUser()}>Pobierz userów</button> */}
				</div>
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
				<div>
					<h2>Skasuj konto</h2>
					<form onSubmit={deleteUser}>
						<input
							type='text'
							placeholder='adres-email'
							value={user_email}
							onChange={event => {
								set_user_email(event.target.value)
							}}
						/>
						<button type='submit'>Skasuj konto</button>
					</form>
				</div>
				<div>
					{/*ADD NEW TOPICS*/}
					<h2>Dodaj nowy dział</h2>
					<form onSubmit={handleNewTopic}>
						<input
							type='text'
							placeholder='Nazwa działu'
							onChange={event => {
								setTopicName(event.target.value)
							}}
						/>
						<textarea
							placeholder='dodaj treść'
							onChange={event => {
								setTopicDescription(event.target.value)
							}}
						></textarea>
						<button type='submit'>Dodaj nowe zagadnienie</button>
					</form>
				</div>
			</div>
			<div>
				<h2>Lista użytkowników:</h2>
				<div>
					<div className='flex justify-space-around'>
						<div>ID</div>
						<div>E-mail</div>
					</div>
					{users.map((user, index) => (
						<ul key={index}>
							<div className='flex justify-space-around'>
								<div>{user.user_id}</div>
								<div>{user.user_email}</div>
							</div>
						</ul>
					))}
				</div>
				<h2>Lista działów:</h2>
			</div>
		</div>
	)
}
