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

	const handleCheckAnswer = () => {
		const userAnswer = answer.trim().toLowerCase() 
		const correctAnswer = currentQuestion.correct_answer.trim().toLowerCase() 

		if (userAnswer === correctAnswer) {
			setOutput('Dobrze!')
		} else {
			setOutput('Źle!')
		}

		setCurrentQuestionIndex(prevIndex => prevIndex + 1)

		setAnswer('')
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
