import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { checkInputAnswer } from '../../../../backend/guard/ExamScript'
import { DashboardNav } from '../StartPage/DashboardNav'

function LearnTest() {
	const API_URL = 'http://localhost:4000'

	const [question, setQuestion] = useState({})
	const [answer, setAnswer] = useState()
	const navigate = useNavigate()
	const [output, setOutput] = useState()
	const { question_id } = useParams()

	useEffect(() => {
		const fetchQuestion = async () => {
			try {
				const response = await axios.post(`${API_URL}/getopenquestion/${question_id}`)
				setQuestion(response.data)
			} catch (error) {
				console.error('Error fetching question:', error)
			}
		}

		fetchQuestion()
	}, [question_id])

	const handleCheckAnswer = () => {
		const result = checkInputAnswer(answer, question)
		setOutput(result)
	}

	return (
		<div className='flex-exam'>
			<div>
				<DashboardNav />
			</div>
			<div className='exam'>
				<h2 className='exam__header'>Ćwiczenie nr. 1/10</h2>
				<div className='exam__exam-lists'>
					<p className='exam__question'>{question.question}</p>
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
