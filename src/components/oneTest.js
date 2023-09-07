import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function OneTest() {
	const [topics, setTopics] = useState([])
	const [answer, setAnswer] = useState('')

	const checkAnswer = (correctAnswer, userAnswer) => {
		if (correctAnswer === userAnswer) {
			console.log('ok')
		} else {
			console.log('no')
		}
	}

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
						{topic.answer_input_correct}
						<input
							type='text'
							onChange={e => {
								setAnswer(e.target.value)
							}}
						/>
						<button onClick={() => checkAnswer(topic.answer_input_correct, answer)}>Sprawdź odpowiedź</button>
					</div>
				))}
			</div>
		</div>
	)
}
