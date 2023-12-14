import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function LearnTest() {
	const API_URL = 'http://localhost:4000'

	const [question, setQuestion] = useState({})
	const navigate = useNavigate()
	const { question_id } = useParams()

	useEffect(() => {
		const fetchQuestion = async () => {
			try {
				const response = await axios.post(`${API_URL}/getopenquestion/${question_id}`)

				setQuestion(response.data)
			} catch (error) {
				console.error('Error fetching question:', error)
			}
		}

		fetchQuestion()
	}, [question_id])

	return (
		<div className='flex-exam'>
			<div className='exam'>
				<h2 className='exam__header'>Test sprawdzający wiedzę</h2>
				<div className='exam__exam-lists'>
					{/* Wyświetl pytanie i inne informacje */}
					<p>Question ID: {question.question_id}</p>
					<p>Question: {question.question}</p>
					<p>Correct Answer: {question.correct_answer}</p>
				</div>
			</div>
		</div>
	)
}

export default LearnTest
