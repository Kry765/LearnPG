import axios from 'axios'
import { useState, useEffect } from 'react'
import { AdminMenu } from './AdminMenu'

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

	const handleNewTopic = async e => {
		// e.preventDefault()
		const formTopics = { topicName, topicDescription }
		const res = await axios.post(API_URL + '/addnewtopic', formTopics, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

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

	const handleDeleteTopic = async e => {
		// e.preventDefault()
		const formData = { dropTopic }
		try {
			const res = await axios.post(API_URL + '/droptopic', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Dział został skasowany')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.error(error)
			alert('Wystąpił błąd')
		}
	}

	const handleEditTopicName = async e => {
		// e.preventDefault()
		const formData = { idEditTopic, editTopic }
		try {
			const res = await axios.post(API_URL + '/edittopicname', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Nazwa tematu zmieniona')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.error(error)
		}
	}
	const handleEditTopicDesciption = async e => {
		// e.preventDefault()
		const formData = { idEditTopicDescription, setIdEditTopicDescription }
		try {
			const res = await axios.post(API_URL + '/edittopicdescription', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Treść zmieniona')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddNewOpenQuestion = async e => {
		// e.preventDefault()
		const formData = { questionId, nrQuestionId, questionName, correctAnswer }
		try {
			const res = axios.post(API_URL + '/rootaddopenquestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Zapytanie dodane')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleDeleteQuestionId = async e => {
		// e.preventDefault()
		const formData = { deleteQuestionId }
		try {
			const res = axios.post(API_URL + '/rootdeleteopenquestion', formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			if (res.status === 200) {
				alert('Zapytanie dodane')
			} else {
				alert('Wystąpił błąd')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleEditOpenQuestion = async e => {
		// e.preventDefault()
		const formData = { editOpenQuestionId, editOpenQuestion, editCorrectAnswer }
		axios.post(API_URL + '/rooteditopenquestion', formData, {
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
			<div>
				<div>
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
				<div>
					<h2>Usuń dział:</h2>
					<form onSubmit={handleDeleteTopic}>
						<label>
							Wprowadź nazwę działu który chcesz usunąć
							<input
								type='text'
								value={dropTopic}
								onChange={event => {
									setDropTopic(event.target.value)
								}}
							/>
						</label>
						<button type='submit'>Skasuj Dział</button>
					</form>
				</div>
				<div>
					<h2>Edytuj nazwę działu:</h2>
					<form onSubmit={handleEditTopicName}>
						<label>
							Wprowadź ID działu który chcesz edytować
							<input
								type='text'
								value={idEditTopic}
								onChange={event => {
									setIdEditTopic(event.target.value)
								}}
							/>
							<input
								type='text'
								value={editTopic}
								onChange={event => {
									setEditTopic(event.target.value)
								}}
							/>
						</label>
						<button type='submit'>Zmień nazwę działu</button>
					</form>
				</div>

				<div>
					<h2>Edytuj treść działu:</h2>
					<form onSubmit={handleEditTopicDesciption}>
						<label>
							Wprowadź ID działu który chcesz edytować
							<input
								type='text'
								value={idEditTopicDescription}
								onChange={event => {
									setIdEditTopicDescription(event.target.value)
								}}
							/>
							<textarea
								type='text'
								value={editTopicDesription}
								onChange={event => {
									setEditTopicDesription(event.target.value)
								}}
							></textarea>
						</label>
						<button type='submit'>Zmień treść działu</button>
					</form>
				</div>

				<div>
					<h2>
						Dodaj nowe zapytania, UWAGA!! dodawaj numer pytania chronologiczne, jeżeli to jest pierwsze pytanie, ustaw
						jako 1:
					</h2>
					<form onSubmit={handleAddNewOpenQuestion}>
						<label>
							Podaj numer Sekcji do której chcesz dodać pytanie
							<input
								type='text'
								value={questionId}
								onChange={event => {
									setQuestionId(event.target.value)
								}}
							/>
							Dodaj numer pytania, pamiętaj aby numeracja była chronologiczna
							<input
								type='text'
								value={nrQuestionId}
								onChange={event => {
									setNrQuestionId(event.target.value)
								}}
							/>
							Dodaj treść zapytania
							<input
								type='text'
								value={questionName}
								onChange={event => {
									setQuestionName(event.target.value)
								}}
							/>
							Dodaj poprawną odpowiedź
							<input
								type='text'
								value={correctAnswer}
								onChange={event => {
									setCorrectAnswer(event.target.value)
								}}
							/>
						</label>
						<button type='submit'>Dodaj otwarte pytanie</button>
					</form>
				</div>
				<div>
					<h2>Kasowanie pytań otwartych</h2>
					<form onSubmit={handleDeleteQuestionId}>
						<label>
							Podaj ID Pytania które chcesz skasować
							<input
								type='text'
								value={deleteQuestionId}
								onChange={event => {
									setDeleteQuestionId(event.target.value)
								}}
							/>
						</label>
						<button type='submit'>Skasuj otwarte pytanie</button>
					</form>
				</div>
				{/**/}
				<div>
					<h2>Edycja pytań otwartych</h2>
					<div>
						<form onSubmit={handleEditOpenQuestion}>
							<label>
								Podaj ID Pytania które chcesz edytować
								<input
									type='text'
									value={editOpenQuestionId}
									onChange={event => {
										setEditOpenQuestionId(event.target.value)
									}}
								/>
								<label>
									Podaj treść pytania
									<input
										type='text'
										value={editOpenQuestion}
										onChange={event => {
											setEditOpenQuestion(event.target.value)
										}}
									/>
									Podaj poprawną odpowiedź
									<input
										type='text'
										value={editCorrectAnswer}
										onChange={event => {
											setEditCorrectAnswer(event.target.value)
										}}
									/>
								</label>
							</label>
							<button type='submit'>Edytuj pytanie</button>
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
