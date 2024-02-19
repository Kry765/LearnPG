import axios from 'axios'
import { useState, useEffect } from 'react'
import { AdminMenu } from './AdminMenu'
import { checkEmptyInput } from '../../../backend/guard/Script'

export default function ModifyTopic() {
	const API_URL = 'http://localhost:4000'
	const [topicName, setTopicName] = useState('')
	const [topicDescription, setTopicDescription] = useState('')
	const [dropTopic, setDropTopic] = useState('')
	const [editTopic, setEditTopic] = useState('')
	const [topics, setTopics] = useState([])
	const [questions, setQuestions] = useState([])
	const [idEditTopic, setIdEditTopic] = useState('')
	const [idEditTopicDescription, setIdEditTopicDescription] = useState('')
	const [editTopicDesription, setEditTopicDesription] = useState('')
	const [questionId, setQuestionId] = useState('')
	const [nrQuestionId, setNrQuestionId] = useState('')
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [questionName, setQuestionName] = useState('')
	const [deleteQuestionId, setDeleteQuestionId] = useState('')
	const [editCorrectAnswer, setEditCorrectAnswer] = useState('')
	const [editOpenQuestionId, setEditOpenQuestionId] = useState('')
	const [editOpenQuestion, setEditOpenQuestion] = useState('')

	useEffect(() => {
		getTopic()
		getOpenQuestion()
	}, [])

	const getTopic = () => {
		axios
			.get(API_URL + '/gettopic')
			.then(res => {
				setTopics(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const checkDeleteTopic = () => {
		return checkEmptyInput(dropTopic)
	}

	const checkCreateTopic = () => {
		return checkEmptyInput(topicName, topicDescription)
	}

	const checkEditTopicName = () => {
		return checkEmptyInput(idEditTopic, editTopic)
	}

	const checkEditTopicDescription = () => {
		return checkEmptyInput(idEditTopicDescription, editTopicDesription)
	}

	const checkAddNewOpenQuestion = () => {
		return checkEmptyInput(questionId, nrQuestionId, questionName, correctAnswer)
	}

	const checkDeleteQuestionId = () => {
		return checkEmptyInput(deleteQuestionId)
	}

	const checkEditOpenQuestion = () => {
		return checkEmptyInput(editOpenQuestionId, editOpenQuestion, editCorrectAnswer)
	}

	const handleNewTopic = async e => {
		e.preventDefault()
		const formTopics = { topicName, topicDescription }
		if (checkCreateTopic()) {
			alert('Wprowadź dane')
			return
		}
		try {
			const res = await axios.post(API_URL + '/addnewtopic', formTopics, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 201) {
				await alert('Dział dodany, przeładuj stronę')
			}
		} catch (error) {
			alert('Wystąpił błąd')
			console.error(error)
		}
	}

	const handleDeleteTopic = async e => {
		e.preventDefault()
		const formData = { dropTopic }
		if (checkDeleteTopic()) {
			return alert('Wprowadź dane')
		}
		try {
			const res = await axios.post(API_URL + '/droptopic', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Dział został skasowany, przeładuj strone')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.error(error)
			alert('Wystąpił błąd')
		}
	}

	const handleEditTopicName = async e => {
		e.preventDefault()
		if (checkEditTopicName()) {
			return alert('Wprowadź dane')
		}
		const formData = { idEditTopic, editTopic }
		try {
			const res = await axios.post(API_URL + '/edittopicname', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Nazwa tematu zmieniona, przeładuj strone')
			}
		} catch (error) {
			alert('Wystąpił błąd')
			console.error(error)
		}
	}

	const handleEditTopicDesciption = async e => {
		e.preventDefault()
		if (checkEditTopicDescription()) {
			return alert('Wprowadź dane')
		}
		const formData = { idEditTopicDescription, editTopicDesription }
		try {
			const res = await axios.post(API_URL + '/edittopicdescription', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Treść zmieniona, przeładuj strone')
			}
		} catch (error) {
			alert('Wystąpił błąd')
			console.error(error)
		}
	}

	const getOpenQuestion = () => {
		axios
			.get(API_URL + '/rootgetopenquestion')
			.then(res => {
				setQuestions(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleAddNewOpenQuestion = async e => {
		e.preventDefault()
		if (checkAddNewOpenQuestion()) {
			return alert('Wprowadź dane')
		}
		const formData = { questionId, nrQuestionId, questionName, correctAnswer }
		try {
			const res = await axios.post(API_URL + '/rootaddopenquestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 201) {
				alert('Zapytanie dodane, przeładuj strone')
			}
		} catch (error) {
			console.log(error)
			alert('Podana sekcja nie istnieje, lub numer pytania jest nieprawidłowy')
			return
		}
	}

	const handleDeleteQuestionId = async e => {
		e.preventDefault()
		if (checkDeleteQuestionId()) {
			return alert('Wprowadz dane')
		}
		const formData = { deleteQuestionId }
		try {
			const res = await axios.post(API_URL + '/rootdeleteopenquestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Pytanie otwarte zostało skasowane, przeładuj strone')
			}
		} catch (error) {
			console.log(error)
			alert('Wystąpił błąd')
			return
		}
	}

	const handleEditOpenQuestion = async e => {
		e.preventDefault()
		if (checkEditOpenQuestion()) {
			return alert('Wprowadź dane')
		}
		const formData = { editOpenQuestionId, editOpenQuestion, editCorrectAnswer }

		try {
			const res = await axios.post(API_URL + '/rooteditopenquestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 400) {
				alert('Pytanie otwarte zostało edytowane, przeładuj strone')
			} else if ((res.status = 400)) {
				alert('Nie znaleziono pytania')
			}
		} catch (error) {
			console.error(error)
			alert('Wystąpił błąd')
			return
		}
	}

	return (
		<div className='root'>
			<div>
				<AdminMenu />
			</div>
			<div className='root__right-page'>
				<div>
					<h2 className='root__space-input'>Dział Labolatoria</h2>
					<form onSubmit={handleNewTopic} className='root__center-box'>
						<h2 className='root__space-input'>Treść Labolatoria</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj nowy dział</p>
							<input
								className='root__input'
								type='text'
								placeholder='Nazwa działu'
								onChange={event => {
									setTopicName(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Dodaj treść do nowego działu</p>
							<textarea
								className='root__input--textarea'
								placeholder='Dodaj treść'
								onChange={event => {
									setTopicDescription(event.target.value)
								}}
							></textarea>
						</label>

						<button type='submit' className='root__btn'>
							Dodaj nowe zagadnienie
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleDeleteTopic} className='root__center-box'>
						<h2 className='root__space-input'>Usuń dział:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź nazwę działu który chcesz usunąć</p>
							<input
								className='root__input'
								type='text'
								value={dropTopic}
								onChange={event => {
									setDropTopic(event.target.value)
								}}
							/>
						</label>

						<button type='submit' className='root__btn'>
							Skasuj Dział
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleEditTopicName} className='root__center-box'>
						<h2 className='root__space-input'>Edytuj nazwę działu:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź ID działu który chcesz edytować</p>
							<input
								className='root__input'
								type='number'
								value={idEditTopic}
								onChange={event => {
									setIdEditTopic(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź nową nazwę działu:</p>
							<input
								type='text'
								className='root__input'
								value={editTopic}
								onChange={event => {
									setEditTopic(event.target.value)
								}}
							/>
						</label>

						<button type='submit' className='root__btn'>
							Zmień nazwę działu
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleEditTopicDesciption} className='root__center-box'>
						<h2 className='root__space-input'>Edytuj treść działu:</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź ID działu który chcesz edytować</p>
							<input
								className='root__input'
								type='text'
								value={idEditTopicDescription}
								onChange={event => {
									setIdEditTopicDescription(event.target.value)
								}}
							/>
						</label>
						<label className='root__space-input'>
							<p className='root__input-description'>Wprowadź nową treść</p>
							<textarea
								type='text'
								className='root__input--textarea'
								value={editTopicDesription}
								onChange={event => {
									setEditTopicDesription(event.target.value)
								}}
							></textarea>
						</label>

						<button type='submit' className='root__btn'>
							Zmień treść działu
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleAddNewOpenQuestion} className='root__center-box'>
						<h2 className='root__space-input'>Dodaj nowe pytania pod konkretny dział</h2>
						<h4>UWAGA!! dodawaj numer pytania chronologiczne, jeżeli to jest pierwsze pytanie, ustaw jako 1:</h4>
						<label className='root__input-space'>
							<p className='root__input-description'>Podaj numer Sekcji do której chcesz dodać pytanie</p>
							<input
								className='root__input'
								type='number'
								value={questionId}
								onChange={event => {
									setQuestionId(event.target.value)
								}}
							/>
						</label>
						<label className='root__input-space'>
							<p className='root__input-description'>Dodaj numer pytania, pamiętaj aby numeracja była chronologiczna</p>
							<input
								type='number'
								className='root__input'
								value={nrQuestionId}
								onChange={event => {
									setNrQuestionId(event.target.value)
								}}
							/>
						</label>
						<label className='root__input-space'>
							<p className='root__input-description'>Dodaj treść zapytania</p>
							<input
								type='text'
								className='root__input'
								value={questionName}
								onChange={event => {
									setQuestionName(event.target.value)
								}}
							/>
						</label>
						<label className='root__input-space'>
							<p className='root__input-description'>Dodaj poprawną odpowiedź</p>
							<input
								className='root__input'
								type='text'
								value={correctAnswer}
								onChange={event => {
									setCorrectAnswer(event.target.value)
								}}
							/>
						</label>

						<button type='submit' className='root__btn'>
							Dodaj otwarte pytanie
						</button>
					</form>
				</div>
				<div>
					<form onSubmit={handleDeleteQuestionId} className='root__center-box'>
						<h2>Kasowanie pytań otwartych</h2>
						<label className='root__space-input'>
							<p className='root__input-description'>Podaj ID Pytania które chcesz skasować</p>
							<input
								type='number'
								className='root__input'
								value={deleteQuestionId}
								onChange={event => {
									setDeleteQuestionId(event.target.value)
								}}
							/>
						</label>
						<button type='submit' className='root__btn'>
							Skasuj otwarte pytanie
						</button>
					</form>
				</div>
				<div>
					<div>
						<form onSubmit={handleEditOpenQuestion} className='root__center-box'>
							<h2>Edycja pytań otwartych</h2>
							<label className='root__space-input'>
								<p className='root__input-description'>Podaj ID Pytania które chcesz edytować</p>
								<input
									type='number'
									className='root__input'
									value={editOpenQuestionId}
									onChange={event => {
										setEditOpenQuestionId(event.target.value)
									}}
								/>
							</label>
							<label className='root__space-input'>
								<p className='root__input-description'>Podaj treść pytania</p>
								<input
									type='text'
									className='root__input'
									value={editOpenQuestion}
									onChange={event => {
										setEditOpenQuestion(event.target.value)
									}}
								/>
							</label>
							<label className='root__space-input'>
								<p className='root__input-description'>Podaj poprawną odpowiedź</p>
								<input
									type='text'
									className='root__input'
									value={editCorrectAnswer}
									onChange={event => {
										setEditCorrectAnswer(event.target.value)
									}}
								/>
							</label>
							<button type='submit' className='root__btn'>
								Edytuj pytanie
							</button>
						</form>
					</div>
				</div>
				<div>
					<h2>Lista działów:</h2>
					<div>
						{topics.map((topic, index) => (
							<div key={index}>
								<b>ID:</b>
								<b>{topic.question_id}</b>
								<br />
								<br />
								<b>Nazwa działu: </b>
								<b>{topic.topic_name}</b>
								<br />
								<br />
								<b>Treść działu: </b>
								{topic.topic_description}
							</div>
						))}
					</div>
				</div>
				<div>
					<h2>Lista pytań otwartych:</h2>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Numer dotyczy sekcji</th>
								<th>Numer pytania</th>
								<th>Treść pytania</th>
								<th>Poprawna odpowiedź</th>
							</tr>
						</thead>
						<tbody>
							{questions.map((openquestion, index) => (
								<tr key={index}>
									<td>{openquestion.openquestion_id}</td>
									<td>{openquestion.question_id}</td>
									<td>{openquestion.nr_question_id}</td>
									<td>{openquestion.question}</td>
									<td>{openquestion.correct_answer}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
