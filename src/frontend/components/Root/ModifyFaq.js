import { useState, useEffect } from 'react'
import axios from 'axios'
import { AdminMenu } from './AdminMenu'
import { checkEmptyInput } from '../../../backend/guard/Script'

export default function ModifyFaq() {
	const [handleFaq, setHandleFaq] = useState('')
	const [faqName, setFaqName] = useState('')
	const [faqDescription, setFaqDescription] = useState('')
	const [faqs, setFaqs] = useState([])
	const [idFaqDelete, setIdFaqDelete] = useState('')
	const API_URL = 'http://localhost:4000'

	useEffect(() => {
		getFaq()
	}, [])

	const checkAddFaq = () => {
		return checkEmptyInput(faqName, faqDescription)
	}

	const getFaq = () => {
		axios
			.get(API_URL + '/rootgetfaq')
			.then(res => {
				setFaqs(res.data)
				setHandleFaq(res.data[0])
			})
			.catch(err => {
				console.log(err)
			})
	}

	const addFaq = async e => {
		e.preventDefault()
		const formData = { faqName, faqDescription }
		if (checkAddFaq()) {
			return alert('Podane pole jest puste')
		}
		try {
			const res = await axios.post(API_URL + '/addrootfaq', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 201) {
				return alert('FAQ Utworzone')
			} else if (res.status === 201) {
				alert('FAQ już istnieje')
			} else if (res.status === 500) {
				alert('Wystąpił błąd')
			}
		} catch (err) {
			console.error(err)
		}
	}

	const deleteFaq = () => {
		const formData = { idFaqDelete }
		try {
			const res = axios.post('/rootdeletefaq', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Konto zostało skasowane')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div className='root__right-page'>
				<div>
					<h2 className='root__space-input'>FAQ</h2>
				</div>
				<div>
					<form onSubmit={addFaq} className='root__center-box'>
						<h2 className='root__space-input'>Dodaj konto</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź tytuł FaQ: </p>
							<input
								className='root__input'
								type='text'
								placeholder='Tytuł Faq'
								value={faqName}
								onChange={event => {
									setFaqName(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź opis FaQ: </p>
							<input
								className='root__input'
								type='text'
								placeholder='ID FaQ'
								value={faqDescription}
								onChange={event => {
									setFaqDescription(event.target.value)
								}}
							/>
						</label>
						<input type='submit' className='root__btn' value='Dodaj Faq' />
					</form>
				</div>
				<div>
					<form onSubmit={deleteFaq} className='root__center-box'>
						<h2 className='root__space-input'>Usuń konto</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź ID FaQ: </p>
							<input
								className='root__input'
								type='text'
								placeholder='ID FaQ'
								value={idFaqDelete}
								onChange={event => {
									setIdFaqDelete(event.target.value)
								}}
							/>
						</label>
						<input type='submit' className='root__btn' value='Skasuj Faq' />
					</form>
				</div>
				<div>
					<h2>Lista pytań otwartych:</h2>
					<table>
						<thead>
							<tr>
								<th>FAQ ID</th>
								<th>Tytuł FAQ</th>
								<th>Opis FAQ</th>
							</tr>
						</thead>
						<tbody>
							{faqs.map((faq, index) => (
								<tr key={index}>
									<td>{faq.faq_id}</td>
									<td>{faq.faq_name}</td>
									<td>{faq.faq_description}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
