import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { isLogin, outLogin } from '../../../../backend/guard/ProtectLink'

function LearnTest() {
	const API_URL = 'http://localhost:4000'
	const [answer, setAnswer] = useState('')
	const [output, setOutput] = useState('')
	const [questions, setQuestions] = useState([])
	const { question_id } = useParams()
	const navigate = useNavigate()
	const [currentQuestion, setCurrentQuestion] = useState(0)

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await axios.get(`${API_URL}/getopenquestions/${question_id}`)
				setQuestions(response.data)
			} catch (error) {
				console.error('Error fetching questions:', error)
			}
		}

		fetchQuestions()
	}, [question_id, currentQuestion])

	const handleCheckAnswer = async () => {
		setCurrentQuestion(prevQuestion => prevQuestion + 1)
		const userAnswer = answer.trim().toLowerCase()
		const correctAnswer = questions[currentQuestion]?.correct_answer.trim().toLowerCase()

		if (userAnswer == correctAnswer) {
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
			} catch (error) {
				console.error(error)
			}
			setOutput('Dobrze!')
			setAnswer('')
		} else {
			setOutput('Źle!')
		}

		if (currentQuestion >= 9) {
			navigate('/dashboard/results')
		}
	}

	return (
		<div className='flex-exam'>
			<DashboardNav className='navigation' />
			<div className='exam'>
				<h2 className='exam__header'>Ćwiczenie nr. {currentQuestion + 1}/10</h2>
				<div className='exam__exam-lists'>
					<p className='exam__question'>{questions[currentQuestion]?.question}</p>
					<input type='text' className='exam__input' value={answer} onChange={e => setAnswer(e.target.value)} />
					<button
						className='href__btn'
						onClick={() => {
							handleCheckAnswer()
						}}
					>
						Sprawdź
					</button>
					<p>{output}</p>
				</div>
			</div>
		</div>
	)
}

export default LearnTest
