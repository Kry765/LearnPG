import axios from 'axios'
import { useState, useEffect } from 'react'

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

	const handleAddCloseQuestion = () => {
		const formData = { closeQuestion, closeQuestionA, closeQuestionB, closeQuestionC, correctAnswer }

		axios.post(API_URL + '/rootaddclosequestion', formData, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		try {
		} catch (error) {
			console.log(error)
		}
	}

	const handleDeletCloseQuestion = () => {
		const formData = { deleteCloseQuestion }
		axios.post(API_URL + '/rootdeleteclosequestion', formData, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		try {
		} catch {}
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
		try {
		} catch {}
	}

	return (
		<div>
			<div>
				<h2>Lista dodaj zapytanie zamknięte:</h2>
				<form onSubmit={handleAddCloseQuestion}>
					<label>
						Dodaj Treść pytania
						<input
							type='text'
							value={closeQuestion}
							onChange={event => {
								setCloseQuestion(event.target.value)
							}}
						/>
					</label>
					<label>
						Dodaj Odpowiedź A
						<input
							type='text'
							value={closeQuestionA}
							onChange={event => {
								setCloseQuestionA(event.target.value)
							}}
						/>
					</label>
					<label>
						Dodaj Odpowiedź B
						<input
							type='text'
							value={closeQuestionB}
							onChange={event => {
								setCloseQuestionB(event.target.value)
							}}
						/>
					</label>
					<label>
						Dodaj Odpowiedź C
						<input
							type='text'
							value={closeQuestionC}
							onChange={event => {
								setCloseQuestionC(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź poprawną odpowiedź
						<input
							type='text'
							value={correctAnswer}
							onChange={event => {
								setCorrectAnswer(event.target.value)
							}}
						/>
					</label>
					<button type='submit'>Dodaj zapytanie</button>
				</form>
			</div>
			<div>
				<h2>Kasowanie pytań zamkniętych:</h2>
				<form onSubmit={handleDeletCloseQuestion}>
					<label>
						Wprowadź ID pytania które chcesz usunąć
						<input
							type='text'
							value={deleteCloseQuestion}
							onChange={event => {
								setDeleteCloseQuestion(event.target.value)
							}}
						/>
						<button type='submit'>Skasuj zapytanie</button>
					</label>
				</form>
			</div>
			<div>
				<h2>Edycja pytań zamkniętych:</h2>
				<form onSubmit={handleEditCloseQuestion}>
					<label>
						Wprowadź ID pytania które chcesz edytować
						<input
							type='text'
							value={editCloseQuestionId}
							onChange={event => {
								setEditCloseQuestionId(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź nową treść zapytania
						<input
							type='text'
							value={editCloseQuestionName}
							onChange={event => {
								setEditCloseQuestionName(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź nową odpowiedź A
						<input
							type='text'
							value={editCloseQuestionA}
							onChange={event => {
								setEditCloseQuestionA(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź nową odpowiedź B
						<input
							type='text'
							value={editCloseQuestionB}
							onChange={event => {
								setEditCloseQuestionB(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź nową odpowiedź C
						<input
							type='text'
							value={editCloseQuestionC}
							onChange={event => {
								setEditCloseQuestionC(event.target.value)
							}}
						/>
					</label>
					<label>
						Wprowadź poprawną odpowiedź
						<input
							type='text'
							value={editCorrectAnswer}
							onChange={event => {
								setEditCorrectAnswer(event.target.value)
							}}
						/>
					</label>
					<button type='submit'>Edytuj zapytanie</button>
				</form>
			</div>
			<div>
				<h2>Lista pytań zamknięte:</h2>
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
	)
}
