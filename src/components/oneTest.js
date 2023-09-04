import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function OneTest() {
	const [topics, setTopics] = useState([])
	const [answer, setAnswer] = useState()

	useEffect(() => {
		getTopic()
	}, [])

	const getTopic = async () => {
		const url = 'http://localhost:4000/question'
		try {
			const res = await axios.get(url)
			if (res.status === 200) {
				const data = res.data
				setTopics(data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<h1>Test</h1>
			<div>
				{topics.map((topic, index) => (
					<div key='index'>
						<p>{topic.question_name}</p>
						<input
							type='text'
							value='answer'
							onChange={event => {
								setAnswer(event.target.value)
							}}
						/>
						<button onClick={checkAnswer}>Sprawdź odpowiedź</button>
					</div>
				))}
			</div>
		</div>
	)
}
