import axios from 'axios'
import '../scss/_reset.scss'
import '../scss/_exam.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaDatabase } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { FaPowerOff } from 'react-icons/fa'
import { isLogin, outLogin } from '../../backend/guard/ProtectLink'
import { useParams } from 'react-router-dom'

function LearnTest() {
	const API_URL = 'http://localhost:4000'
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [answer, setAnswer] = useState([])
	const navigate = useNavigate()
	const { question_id } = useParams()

	const handleLoggout = () => {
		outLogin()
		navigate('/Login')
	}
	const nextQuestion = () => {
		setSelectedAnswer(null)
		setCurrentQuestion(prevQuestion => prevQuestion + 1)
	}

	const backQuestion = () => {
		setSelectedAnswer(null)
		setCurrentQuestion(prevQuestion => prevQuestion - 1)
	}

	const checkQuestion = () => {
		if (selectedAnswer === null) {
			setAnswer('Wybierz odpowiedź przed sprawdzeniem.')
			return
		}

		if (questions[currentQuestion]) {
			const correctAnswer = questions[currentQuestion].correct_answer
			const selectedOption = String.fromCharCode(65 + selectedAnswer)
			let isAnswerCorrect =
				selectedOption === correctAnswer
					? setAnswer('Poprawna odpowiedź! Otrzymujesz punkt.')
					: setAnswer('Niestety, odpowiedź niepoprawna.')
		}

		if (currentQuestion + 1 === 10) {
			navigate('/Dashboard/Learn/LearnTest/ResultsCloseQuestion/')
		} else {
			nextQuestion()
		}
	}

	useEffect(() => {
		if (!isLogin()) {
			navigate('/Login')
		} else if (currentQuestion + 1 === 10) {
			navigate('/Dashboard/Exam/ResultsCloseQuestion')
		} else {
			axios
				.get(API_URL + '/getopenquestion/${question_id}')
				.then(res => {
					setQuestions(res.data)
				})
				.catch(err => {
					console.error(err)
				})
		}
	}, [currentQuestion])
	return (
		<div className='flex-exam'>
			<div className='exam__menu'>
				<div
					className='dashboard__position-icon'
					onClick={() => {
						navigate('/dashboard')
					}}
				>
					<AiFillHome />
				</div>
				<div
					className='dashboard__position-icon'
					onClick={() => {
						navigate('/dashboard/settings')
					}}
				>
					<AiTwotoneSetting />
				</div>
				<div
					className='dashboard__position-icon'
					onClick={() => {
						navigate('/dashboard/help')
					}}
				>
					<BiSolidHelpCircle />
				</div>
				<div className='dashboard__position-icon' onClick={handleLoggout}>
					<FaPowerOff />
				</div>
			</div>
			<div className='exam'>
				<h2 className='exam__header'>Test sprawdzający wiedzę</h2>
				{questions.length > 0 && currentQuestion < questions.length && (
					<div className='exam__exam-lists'>
						<div className='exam__question-nr'>
							Pytanie nr. {currentQuestion + 1}
							<div>{questions[currentQuestion].question}</div>
						</div>
						<input type='text'></input>
						<div className='exam__exam-check'>
							<input className='exam__exam-btn--next' type='button' value='sprawdź' onClick={checkQuestion} />
							<input className='exam__exam-btn' type='button' value='cofnij' onClick={backQuestion} />
							<input className='exam__exam-btn' type='button' value='dalej' onClick={nextQuestion} />
						</div>
						<div>{answer}</div>
						<p></p>
					</div>
				)}
			</div>
		</div>
	)
}
export default LearnTest
