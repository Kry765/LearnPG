import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ModifyTopic() {
	const API_URL = 'http://localhost:4000'
	const [topicName, setTopicName] = useState('')
	const [topicDescription, setTopicDescription] = useState('')
	const [dropTopic, setDropTopic] = useState()
	const [topics, setTopics] = useState([])

	const handleNewTopic = async e => {
		e.preventDefault()
		const formTopics = { topicName, topicDescription }
		const res = await axios.post(API_URL + '/addnewtopic', formTopics, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	useEffect(() => {
		getTopic()
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

	const handleDeleteTopic = async e => {
		e.preventDefault()
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

	return (
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
		</div>
	)
}
