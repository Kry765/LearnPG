import { checkEmptyInput, checkCorrectEmail } from '../../../backend/guard/Script'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { AdminMenu } from './AdminMenu'

export default function ModifyUser() {
	const API_URL = 'http://localhost:4000'
	const [user_pwd, set_user_pwd] = useState('')
	const [user_email, set_user_email] = useState('')
	const [users, setUsers] = useState([])
	const [deleteUserEmail, setDeleteUserEmail] = useState('')
	const [pointEmail, setPointEmail] = useState('')
	const [currentEmail, setCurrentEmail] = useState('')
	const [newPwd, setNewPwd] = useState('')
	const [oldEmail, setOldEmail] = useState('')
	const [newEmail, setNewEmail] = useState('')

	useEffect(() => {
		getUser()
	}, [])

	const checkEmail = () => {
		return checkCorrectEmail(user_email)
	}

	const checkInput = () => {
		return checkEmptyInput(user_email, user_pwd)
	}

	const addUser = async e => {
		e.preventDefault()
		const formData = { user_email, user_pwd }
		if (checkInput()) {
			alert('Podane pole jest puste')
			return
		}
		if (checkEmail()) {
			alert('Nieprawidłowy adres email')
			return
		}
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

	const deleteUser = async e => {
		// e.preventDefault()
		try {
			const formData = { email: deleteUserEmail }
			const response = await axios.post(API_URL + '/rootdeleteuser', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			if (response.status === 200) {
				alert('Konto skasowane')
			}
		} catch (error) {
			alert('Wystąpił błąd')
		}
	}

	const clearPoint = async e => {
		// e.preventDefault()
		try {
			const formData = { email: pointEmail }
			const response = await axios.post(API_URL + '/rootresetpoint', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			if (response.status === 200) {
				alert('Punkty wyczyszczone')
			}
		} catch (error) {
			alert('Wystąpił błąd')
		}
	}

	const newPassword = async e => {
		// e.preventDefault()
		const formData = { email: currentEmail, password: newPwd }
		try {
			const response = axios.post(API_URL + '/rootresetpassword', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			if (response.status === 200) {
				alert('Hasło zmienione')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			alert('Wystąpił błąd')
		}
	}

	const newUserEmail = async e => {
		// e.preventDefault()
		const formData = { oldEmail, newEmail }
		if (oldEmail === newEmail) {
			return alert('E-mail jest taki sam jak poprzedni')
		}
		try {
			const response = await axios.post(API_URL + '/rootchangeemail', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			})
			if (response.status === 200) {
				alert('Email zmieniony')
			} else if (response.status === 404) {
				alert('Użytkownik nie został znaleziony')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			alert('Wystąpił błąd')
		}
	}

	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div className='root__right-page'>
				<div className='root__center-box'>
					<h2>Dodaj konto</h2>
					<form onSubmit={addUser}>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź adres E-mail: </p>
							<input
								className='root__input'
								type='text'
								placeholder='adres-email'
								value={user_email}
								onChange={event => {
									set_user_email(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź hasło: </p>
							<input
								className='root__input'
								type='text'
								placeholder='hasło'
								value={user_pwd}
								onChange={event => {
									set_user_pwd(event.target.value)
								}}
							/>
						</label>
						<div>
							<button type='submit' className='root__btn'>
								Dodaj konto
							</button>
						</div>
					</form>
				</div>
				<div className='root__center-box'>
					<h2>Skasuj konto</h2>
					<form onSubmit={deleteUser}>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź adres email konta które chcesz skasować: </p>
							<input
								className='root__input'
								type='text'
								placeholder='adres-email'
								value={deleteUserEmail}
								onChange={event => {
									setDeleteUserEmail(event.target.value)
								}}
							/>
						</label>
						<div>
							<button type='submit' className='root__btn'>
								Skasuj konto
							</button>
						</div>
					</form>
				</div>
				<div className='root__center-box'>
					<h2>Wyzeruj punkty</h2>
					<form onSubmit={clearPoint}>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj maila użytkownika któremu mam wyzerować punkty:</p>
							<input
								className='root__input'
								type='text'
								placeholder='adres-email'
								value={pointEmail}
								onChange={event => {
									setPointEmail(event.target.value)
								}}
							/>
						</label>
						<div>
							<button type='submit' className='root__btn'>
								Wyzeruj punkty
							</button>
						</div>
					</form>
				</div>
				<div className='root__center-box'>
					<h2>Ustaw nowe hasło:</h2>
					<form onSubmit={newPassword}>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj maila użytkownika któremu chcesz ustawić nowe hasło</p>
							<input
								className='root__input'
								type='text'
								placeholder='adres-email'
								value={currentEmail}
								onChange={event => {
									setCurrentEmail(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj hasło</p>
							<input
								className='root__input'
								type='text'
								placeholder='hasło'
								value={newPwd}
								onChange={event => {
									setNewPwd(event.target.value)
								}}
							/>
						</label>
						<div>
							<button type='submit' className='root__btn'>
								Ustaw hasło
							</button>
						</div>
					</form>
				</div>
				<div className='root__center-box'>
					<h2>Ustaw nowy adres E-mail</h2>
					<form onSubmit={newUserEmail}>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj stary adres E-mail: </p>
							<input
								className='root__input'
								type='text'
								placeholder='stary adres-email'
								value={oldEmail}
								onChange={event => {
									setOldEmail(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj nowy adres E-mail: </p>

							<input
								className='root__input'
								type='text'
								placeholder='nowy adres-email'
								value={newEmail}
								onChange={event => {
									setNewEmail(event.target.value)
								}}
							/>
						</label>
						<div>
							<button type='submit' className='root__btn'>
								Ustaw nowy email
							</button>
						</div>
					</form>
				</div>
				<div className='root-users'>
					<h2>Lista użytkowników:</h2>
					<div>
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>E-Mail</th>
									<th>Punkty</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user, index) => (
									<tr key={index}>
										<td>{user.user_id}</td>
										<td>{user.user_email}</td>
										<td>{user.user_point}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
