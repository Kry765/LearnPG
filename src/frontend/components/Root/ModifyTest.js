import axios from 'axios'
import { useState, useEffect } from 'react'
import { AdminMenu } from './AdminMenu'

export default function ModifyTest() {
	const [questions, setQuestions] = useState([])
	const API_URL = 'http://localhost:4000'
	const [closeQuestion, setCloseQuestion] = useState('')
	const [closeQuestionA, setCloseQuestionA] = useState('')
	const [closeQuestionB, setCloseQuestionB] = useState('')
	const [closeQuestionC, setCloseQuestionC] = useState('')
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [deleteCloseQuestion, setDeleteCloseQuestion] = useState('')
	const [editCloseQuestionId, setEditCloseQuestionId] = useState('')
	const [editCloseQuestionA, setEditCloseQuestionA] = useState('')
	const [editCloseQuestionB, setEditCloseQuestionB] = useState('')
	const [editCloseQuestionC, setEditCloseQuestionC] = useState('')
	const [editCloseQuestionName, setEditCloseQuestionName] = useState('')
	const [editCorrectAnswer, setEditCorrectAnswer] = useState('')
	useEffect(() => {
		getCloseQuestion()
	}, [])

	const getCloseQuestion = () => {
		axios
			.get(API_URL + '/rootgetclosequestion')
			.then(res => {
				setQuestions(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleAddCloseQuestion = async e => {
		e.preventDefault()
		const formData = { closeQuestion, closeQuestionA, closeQuestionB, closeQuestionC, correctAnswer }

		try {
			const res = await axios.post(API_URL + '/rootaddclosequestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 201) {
				alert('Pomyślnie Dodano Użytkownika')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (err) {
			alert('Wystąpił błąd')
			return
		}
	}

	const handleDeletCloseQuestion = () => {
		const formData = { deleteCloseQuestion }
		axios.post(API_URL + '/rootdeleteclosequestion', formData, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	const handleEditCloseQuestion = () => {
		const formData = {
			editCorrectAnswer,
			editCloseQuestionC,
			editCloseQuestionB,
			editCloseQuestionA,
			editCloseQuestionName,
			editCloseQuestionId,
		}
		axios.post(API_URL + '/rooteditclosequestion', formData, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>

			<div className='root__right-page'>
				<div>
					<h2 className='root__space-input'>Pytania Zamknięte</h2>
					<form onSubmit={handleAddCloseQuestion} className='root__center-box'>
						<h2>Dodaj zapytanie zamknięte:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj Treść pytania:</p>
							<input
								className='root__input'
								type='text'
								value={closeQuestion}
								onChange={event => {
									setCloseQuestion(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj Odpowiedź A:</p>
							<input
								className='root__input'
								type='text'
								value={closeQuestionA}
								onChange={event => {
									setCloseQuestionA(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj Odpowiedź B:</p>
							<input
								className='root__input'
								type='text'
								value={closeQuestionB}
								onChange={event => {
									setCloseQuestionB(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj Odpowiedź C:</p>
							<input
								type='text'
								className='root__input'
								value={closeQuestionC}
								onChange={event => {
									setCloseQuestionC(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź poprawną odpowiedź, można wpisać tylko A,B lub C:</p>
							<input
								type='text'
								className='root__input'
								value={correctAnswer}
								onChange={event => {
									setCorrectAnswer(event.target.value)
								}}
							/>
						</label>
						<button type='submit' className='root__btn'>
							Dodaj zapytanie
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleDeletCloseQuestion} className='root__center-box'>
						<h2>Usuń pytanie zamknięte:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź ID pytania które chcesz usunąć</p>
							<input
								type='text'
								className='root__input'
								value={deleteCloseQuestion}
								onChange={event => {
									setDeleteCloseQuestion(event.target.value)
								}}
							/>
						</label>
						<button type='submit' className='root__btn'>
							Skasuj zapytanie
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleEditCloseQuestion} className='root__center-box'>
						<h2>Edycja pytań zamkniętych:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź ID pytania które chcesz edytować</p>
							<input
								className='root__input'
								type='text'
								value={editCloseQuestionId}
								onChange={event => {
									setEditCloseQuestionId(event.target.value)
								}}
							/>
						</label>
						<label>
							<p className='root__input-description'>Wprowadź nową treść zapytania</p>
							<input
								className='root__input'
								type='text'
								value={editCloseQuestionName}
								onChange={event => {
									setEditCloseQuestionName(event.target.value)
								}}
							/>
						</label>
						<label>
							<p className='root__input-description'>Wprowadź nową odpowiedź A</p>
							<input
								className='root__input'
								type='text'
								value={editCloseQuestionA}
								onChange={event => {
									setEditCloseQuestionA(event.target.value)
								}}
							/>
						</label>
						<label>
							<p className='root__input-description'>Wprowadź nową odpowiedź B</p>
							<input
								className='root__input'
								type='text'
								value={editCloseQuestionB}
								onChange={event => {
									setEditCloseQuestionB(event.target.value)
								}}
							/>
						</label>
						<label>
							<p className='root__input-description'>Wprowadź nową odpowiedź C</p>
							<input
								className='root__input'
								type='text'
								value={editCloseQuestionC}
								onChange={event => {
									setEditCloseQuestionC(event.target.value)
								}}
							/>
						</label>
						<label>
							<p className='root__input-description'>Wprowadź poprawną odpowiedź</p>
							<input
								className='root__input'
								type='text'
								value={editCorrectAnswer}
								onChange={event => {
									setEditCorrectAnswer(event.target.value)
								}}
							/>
						</label>
						<button type='submit' className='root__btn'>
							Edytuj zapytanie
						</button>
					</form>
				</div>
				<div className='root__box-center'>
					<h2 className='root__space-input'>Lista pytań zamknięte:</h2>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Treść</th>
								<th>odpowiedź A</th>
								<th>odpowiedź B</th>
								<th>odpowiedź C</th>
								<th>Poprawna odpowiedź</th>
							</tr>
						</thead>
						<tbody>
							{questions.map((question, index) => (
								<tr key={index}>
									<td>{question.closequestion_id}</td>
									<td>{question.question}</td>
									<td>{question.answer_a}</td>
									<td>{question.answer_b}</td>
									<td>{question.answer_c}</td>
									<td>{question.correct_answer}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
