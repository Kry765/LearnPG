import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DashboardNav } from '../StartPage/DashboardNav'
import { isLogin, outLogin } from '../../../../backend/guard/ProtectLink'
import { AiOutlineClose } from '../../../../backend/guard/Icons'

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

		fetchQuestions()
	}, [question_id, currentQuestion])

	const handleCheckAnswer = async () => {
		const userAnswer = answer.trim().toLowerCase()
		const correctAnswer = questions[currentQuestion]?.correct_answer.trim().toLowerCase()

		if (userAnswer == correctAnswer) {
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
			} catch (error) {
				console.error(error)
			}
			setPoints(prevPoints => prevPoints + 1)
			setOutput('Dobrze!')
			setAnswer('')
		} else {
			setOutput('Źle!')
			setAnswer('')
		}

		if (currentQuestion < totalQuestions - 1) {
			setCurrentQuestion(prevQuestion => prevQuestion + 1)
		} else {
			navigate('/dashboard/result', { state: { points, totalQuestions } })
		}
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
				<div className='section'>
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
