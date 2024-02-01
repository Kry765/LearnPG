import axios from 'axios'
import '../../../scss/_reset.scss'
import '../../../scss/_exam.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'

function Exam() {
	const API_URL = 'http://localhost:4000'
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [points, setPoints] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [output, setOutput] = useState([])
	const [outputErr, setOutputErr] = useState('')
	const navigate = useNavigate()
	const [totalQuestions, setTotalQuestions] = useState(0)

	const nextQuestion = () => {
		setSelectedAnswer(null)
		setCurrentQuestion(prevQuestion => prevQuestion + 1)
	}
	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await axios
				.get(API_URL + '/getclosequestion')
				.then(response => {
					setQuestions(response.data)
					setTotalQuestions(response.data.length)
				})
				.catch(error => {
					console.error(error)
				})
		}
		fetchQuestions()
	}, [currentQuestion])

	const checkQuestion = () => {
		if (questions[currentQuestion]) {
			const correctAnswer = questions[currentQuestion].correct_answer
			const selectedOption = String.fromCharCode(65 + selectedAnswer)

			if (selectedOption === correctAnswer && selectedOption !== null) {
				try {
					axios.post(
						`${API_URL}/addpoint`,
						{},
						{
							headers: {
								'Content-Type': 'application/json',
							},
							withCredentials: true,
						}
					)

					setPoints(prevPoints => prevPoints + 1)
					setOutput('Poprawna odpowiedź! Otrzymujesz punkt.')
				} catch (error) {
					console.error(error)
					setOutput('')
					setOutputErr('Wystąpił błąd podczas dodawania punktu.')
				}
			} else {
				setOutput('')
				setOutputErr('Niestety, odpowiedź niepoprawna.')
			}
		}

		if (currentQuestion + 1 === totalQuestions) {
			navigate('/Dashboard/Result', { state: { points, totalQuestions } })
		} else {
			nextQuestion()
		}
	}

	return (
		<div className='flex fd-row'>
			<DashboardNav />
			<div className='section'>
				<div className='belt-auth-right'></div>
				<div className='belt-auth-left'></div>
				<h2>Egzamin</h2>
				{questions.length > 0 && currentQuestion < questions.length && (
					<div className='flex-column'>
						<div className='exam__question-nr'>
							Pytanie nr. {currentQuestion + 1}/{totalQuestions}
							<div>{questions[currentQuestion].question}</div>
						</div>
						<label>
							<div className='exam__exam-list'>
								<input
									className='exam__radio'
									type='radio'
									value='0'
									checked={selectedAnswer === 0}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								A. {questions[currentQuestion].answer_a}
							</div>
						</label>
						<label>
							<div className='exam__exam-list'>
								<input
									className='exam__radio'
									type='radio'
									value='1'
									checked={selectedAnswer === 1}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								B. {questions[currentQuestion].answer_b}
							</div>
						</label>
						<label>
							<div className='exam__exam-list'>
								<input
									className='exam__radio'
									type='radio'
									value='2'
									checked={selectedAnswer === 2}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								C. {questions[currentQuestion].answer_c}
							</div>
						</label>
						<div className='flex-center'>
							<input className='exam__exam-btn--next' type='button' value='sprawdź' onClick={checkQuestion} />
						</div>
						<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
					</div>
				)}
			</div>
		</div>
	)
}
export default Exam
