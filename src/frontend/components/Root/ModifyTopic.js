import axios from 'axios'
import { useState } from 'react'

export default function ModifyTopic() {
	const API_URL = 'http://localhost:4000'
	const [topicName, setTopicName] = useState('')
	const [topicDescription, setTopicDescription] = useState('')
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

	return (
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
	)
}
