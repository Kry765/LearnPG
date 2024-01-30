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
	const checkQuestion = () => {
		// if (selectedAnswer === null) {
		// 	setAnswer('Wybierz odpowiedź przed sprawdzeniem.')
		// 	return
		// }

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

		if (currentQuestion + 1 === 10) {
			navigate('/Dashboard/Result', { state: { points, totalQuestions } })
		} else {
			nextQuestion()
		}
	}

	useEffect(() => {
		if (currentQuestion + 1 === 10) {
			navigate('/Dashboard/Result')
		} else {
			const response = axios
				.get(API_URL + '/getclosequestion')
				.then(response => {
					setQuestions(response.data)
					setTotalQuestions(response.data.length)
				})
				.catch(err => {
					console.error(err)
				})
		}
	}, [currentQuestion])
	return (
		<div className='flex-exam'>
			<DashboardNav />
			<div className='exam'>
				<h2 className='exam__header'>Egzamin</h2>
				{questions.length > 0 && currentQuestion < questions.length && (
					<div className='exam__exam-lists'>
						<div className='exam__question-nr'>
							Pytanie nr. {currentQuestion + 1}
							<div>{questions[currentQuestion].question}</div>
						</div>
						<div className='exam__exam-list'>
							<label>
								<input
									className='exam__radio'
									type='radio'
									value='0'
									checked={selectedAnswer === 0}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								A. {questions[currentQuestion].answer_a}
							</label>
						</div>
						<div className='exam__exam-list'>
							<label>
								<input
									className='exam__radio'
									type='radio'
									value='1'
									checked={selectedAnswer === 1}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								B. {questions[currentQuestion].answer_b}
							</label>
						</div>
						<div className='exam__exam-list'>
							<label>
								<input
									className='exam__radio'
									type='radio'
									value='2'
									checked={selectedAnswer === 2}
									onChange={e => setSelectedAnswer(Number(e.target.value))}
								/>
								C. {questions[currentQuestion].answer_c}
							</label>
						</div>
						<div className='exam__exam-check'>
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
