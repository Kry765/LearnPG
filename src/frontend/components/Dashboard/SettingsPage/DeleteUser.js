import { useState } from 'react'
import axios from 'axios'
function DeleteUser() {
	const API_URL = 'http://localhost:4000'
	const [email, setEmail] = useState('')
	const [output, setOutput] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			axios.post(API_URL + '/deleteuser', {
				email: email,
			})
			alert('Konto zostało skasowane')
		} catch (err) {
			console.log(err)
			setOutput('wystąpił błąd')
		}
	}
	return (
		<div>
			<div className='flex-center'>
				<div className='flex-center box-auth'>
					<form onSubmit={handleSubmit}>
						<h1 className='title-section'>Skasuj konto</h1>
						<div className='flex-column'>
							<div className='space-auth'>
								<label>
									<p>W celu potwierdzenia skasowania konta, prosze o podanie swojego adres E-mail</p>
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
						<div>{output}</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default DeleteUser
