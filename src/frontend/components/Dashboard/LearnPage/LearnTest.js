import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { isLogin, outLogin } from '../../../../backend/guard/ProtectLink'

function LearnTest() {
	const API_URL = 'http://localhost:4000'
	const [answer, setAnswer] = useState('')
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [output, setOutput] = useState('')
	const [questions, setQuestions] = useState([])
	const { question_id } = useParams()

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await axios.get(`${API_URL}/getopenquestions/${question_id}`)
				setQuestions(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchQuestions()
	}, [question_id])

	const currentQuestion = questions[currentQuestionIndex]

	const handleCheckAnswer = async () => {
		const userAnswer = answer.trim().toLowerCase()
		const correctAnswer = currentQuestion.correct_answer.trim().toLowerCase()
		console.log('Cookies:', document.cookie)
		console.log('Token:', localStorage.getItem('token'))
		axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
		try {
			const response = await axios.post(
				`${API_URL}/addpoint`,
				{},
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			)
			console.log('Authorization Header:', axios.defaults.headers.common['Authorization'])

			if (response.data && response.data.success) {
				console.log(response.data)
			} else {
				console.error('Unexpected response:', response.data)
			}
		} catch (error) {
			console.error(error)
			if (error.response) {
				console.error('Response data:', error.response.data)
				console.error('Response status:', error.response.status)
				console.error('Response headers:', error.response.headers)
			} else if (error.request) {
				// Zapytanie zostało wykonane, ale nie otrzymało odpowiedzi
				console.error('No response received from the server')
			} else {
				// Wystąpił błąd podczas konfiguracji żądania
				console.error('Error setting up the request:', error.message)
			}
		}
	}

	return (
		<div className='flex-exam'>
			<DashboardNav className='navigation' />
			<div className='exam'>
				<h2 className='exam__header'>Ćwiczenie nr. {currentQuestionIndex + 1}/10</h2>
				<div className='exam__exam-lists'>
					<p className='exam__question'>{currentQuestion && currentQuestion.question}</p>
					<input type='text' className='exam__input' value={answer} onChange={e => setAnswer(e.target.value)} />
					<button className='href__btn' onClick={handleCheckAnswer}>
						Sprawdź
					</button>
					<p>{output}</p>
				</div>
			</div>
		</div>
	)
}

export default LearnTest
