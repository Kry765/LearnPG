import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { LoggedInUser } from '../../../../backend/guard/Script'

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

	LoggedInUser(navigate)

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
			const storedPoints = localStorage.getItem('points')
			if (storedPoints === null) {
				localStorage.setItem('points', '0')
			}
		}
		fetchQuestions()
	}, [currentQuestion])

	const checkQuestion = () => {
		if (selectedAnswer !== null) {
			if (questions[currentQuestion]) {
				const correctAnswer = questions[currentQuestion].correct_answer
				const selectedOption = String.fromCharCode(65 + selectedAnswer)

				if (selectedOption === correctAnswer) {
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
						const updatedPoints = points + 1
						localStorage.setItem('points', updatedPoints)
						setPoints(prevPoints => prevPoints + 1)
						setOutput('Poprawna odpowiedź! Otrzymujesz punkt.')
						setOutputErr('')
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
		} else {
			setOutput('')
			setOutputErr('Niestety, odpowiedź niepoprawna.')
		}

		if (currentQuestion + 1 === totalQuestions) {
			navigate('/Dashboard/Result', { state: { points, totalQuestions } })
		} else {
			nextQuestion()
		}
	}

	return (
		<div className='flex'>
			<div className='belt-auth-right'></div>
			<div className='belt-auth-left'></div>
			<div className='nav-auth__auth-item--close'>
				<AiOutlineClose
					onClick={() => {
						navigate('/Dashboard/Leartheory')
					}}
				/>
			</div>

			<div className='navigation'>
				<DashboardNav />
				<div className='section flex-center direction-column'>
					<h2 className='title-section'>Egzamin</h2>
					<div className='flex-column form-space'>
						{questions.length > 0 && currentQuestion < questions.length && (
							<div>
								<div className='exam__question-space'>
									<span className='exam__text-decorate'>
										Pytanie nr. {currentQuestion + 1}/{totalQuestions}
									</span>
									<div>{questions[currentQuestion].question}</div>
								</div>
								<label>
									<div className='exam__radio'>
										<input
											type='radio'
											value='0'
											checked={selectedAnswer === 0}
											onChange={e => setSelectedAnswer(Number(e.target.value))}
										/>
										A. {questions[currentQuestion].answer_a}
									</div>
								</label>
								<label>
									<div className='exam__radio'>
										<input
											type='radio'
											value='1'
											checked={selectedAnswer === 1}
											onChange={e => setSelectedAnswer(Number(e.target.value))}
										/>
										B. {questions[currentQuestion].answer_b}
									</div>
								</label>
								<label>
									<div className='exam__radio'>
										<input
											type='radio'
											value='2'
											checked={selectedAnswer === 2}
											onChange={e => setSelectedAnswer(Number(e.target.value))}
										/>
										C. {questions[currentQuestion].answer_c}
									</div>
								</label>
								<div>
									<input className='btn-auth' type='button' value='sprawdź' onClick={checkQuestion} />
								</div>
								<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Exam
