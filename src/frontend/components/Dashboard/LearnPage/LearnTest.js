import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { AiOutlineClose } from '../../../../backend/guard/Icons'
import { LoggedInUser } from '../../../../backend/guard/Script'

function LearnTest() {
	const API_URL = 'http://localhost:4000'
	const [answer, setAnswer] = useState('')
	const [output, setOutput] = useState('')
	const [outputErr, setOutputErr] = useState('')
	const [questions, setQuestions] = useState([])
	const { question_id } = useParams()
	const navigate = useNavigate()
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [points, setPoints] = useState(0)
	const [totalQuestions, setTotalQuestions] = useState(0)
	LoggedInUser(navigate)

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await axios.get(`${API_URL}/getopenquestions/${question_id}`)
				setQuestions(response.data)
				setTotalQuestions(response.data.length)
			} catch (error) {
				console.error('Error fetching questions:', error)
			}
		}
		const storedPoints = localStorage.getItem('points')

		if (storedPoints === null) {
			localStorage.setItem('points', '0')
		}
		fetchQuestions()
	}, [question_id])

	const handleCheckAnswer = async () => {
		const userAnswer = answer.trim().toLowerCase()
		const correctAnswer = questions[currentQuestion]?.correct_answer.trim().toLowerCase()

		if (userAnswer === correctAnswer) {
			try {
				await axios.post(
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
				setPoints(updatedPoints)
				setOutput('Dobrze!')
			} catch (error) {
				console.error(error)
			}
		} else {
			setOutput('Źle!')
		}

		const nextQuestionIndex = currentQuestion + 1
		if (nextQuestionIndex === totalQuestions) {
			navigateToResult()
		} else {
			setCurrentQuestion(nextQuestionIndex)
			setAnswer('')
		}
	}

	const navigateToResult = () => {
		navigate('/dashboard/result', { state: { points, totalQuestions } })
	}

	return (
		<div>
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
					<h2 className='exam__header'>
						Ćwiczenie nr. {currentQuestion + 1}/{totalQuestions}
					</h2>
					<div className='flex-column'>
						<p className='title-section'>{questions[currentQuestion]?.question}</p>
						<input type='text' className='input-auth' value={answer} onChange={e => setAnswer(e.target.value)} />
						<button
							className='href__btn'
							onClick={() => {
								handleCheckAnswer()
							}}
						>
							Sprawdź
						</button>
						<div className={`output ${outputErr ? 'output-err' : ''}`}>{outputErr || output}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearnTest
