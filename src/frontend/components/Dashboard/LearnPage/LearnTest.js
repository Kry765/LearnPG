import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { isLogin, outLogin } from '../../../../backend/guard/ProtectLink'

function LearnTest() {
	const API_URL = 'http://localhost:4000'
	const [currentQuestion, setCurrentQuestion] = useState(1)
	const [question, setQuestion] = useState({})
	const [answer, setAnswer] = useState('')
	const navigate = useNavigate()
	const [output, setOutput] = useState('')
	const { question_id } = useParams()
	const [questions, setQuestions] = useState([])

	useEffect(() => {
		if (question_id) {
			axios
				.get(`${API_URL}/getopenquestion/${question_id}`)
				.then(res => {
					setQuestions(res.data)
				})
				.catch(err => {
					console.error(err)
				})
		}
	}, [question_id, currentQuestion])

	const handleCheckAnswer = () => {
		const currentAnswer = questions[currentQuestion - 1]?.answer

		if (currentAnswer !== undefined) {
			const userAnswer = answer.split(' ').join('').toLowerCase()
			const correctAnswer = currentAnswer.split(' ').join('').toLowerCase()

			console.log('User Answer:', userAnswer)
			console.log('Correct Answer:', correctAnswer)

			if (userAnswer === correctAnswer) {
				setOutput('Dobra odpowiedź!')
			} else {
				setOutput('Zła odpowiedź. Spróbuj ponownie.')
			}
		} else {
			setOutput('Coś poszło nie tak. Spróbuj ponownie.')
		}

		if (currentQuestion < questions.length) {
			const nextQuestion = currentQuestion + 1
			setCurrentQuestion(nextQuestion)
			setAnswer('')
			navigate(`/Dashboard/Learn/LearnTest/${nextQuestion}`)
		} else {
			navigate('/Dashboard/Exam/ResultsCloseQuestion')
		}
	}

	return (
		<div className='flex-exam'>
			<DashboardNav className='navigation' />
			<div className='exam'>
				<h2 className='exam__header'>Ćwiczenie nr. {currentQuestion}/10</h2>
				<div className='exam__exam-lists'>
					<p className='exam__question'>{questions.length > 0 && questions[currentQuestion - 1]?.question}</p>
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
