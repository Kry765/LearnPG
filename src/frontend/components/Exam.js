import axios from 'axios'
import '../scss/_reset.scss'
import '../scss/_exam.scss'

import { useEffect, useHistory, useState } from 'react'

function Exam() {
	const API_URL = 'http://localhost:4000'
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [results, setResults] = useState({ correct: 0 })
	// const history = useHistory()

	const nextQuestion = () => {
		setSelectedAnswer(null)
		setCurrentQuestion(prevQuestion => prevQuestion + 1)
	}

	const checkQuestion = () => {
		if (selectedAnswer === null) {
			alert('Wybierz odpowiedź przed sprawdzeniem.')
			return
		}

		if (questions[currentQuestion]) {
			const correctAnswer = questions[currentQuestion].correct_answer
			const selectedOption = String.fromCharCode(65 + selectedAnswer)
			const isAnswerCorrect = selectedOption === correctAnswer

			alert(isAnswerCorrect ? 'Poprawna odpowiedź! otrzymujesz punkt' : 'Niestety, odpowiedź niepoprawna.')
		}
	}

	useEffect(() => {
		axios
			.get(API_URL + '/getclosequestion')
			.then(res => {
				setQuestions(res.data)
			})
			.catch(err => {
				console.error(err)
			})
	}, [currentQuestion])
	return (
		<div className='exam'>
			<h2 className='exam__header'>Egzamin z działu:</h2>
			{questions.length > 0 && (
				<div className='exam__exam-lists'>
					<div className='exam__question-nr'>Pytanie nr. {currentQuestion + 1}</div>
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
						<input className='exam__exam-btn' type='button' value='sprawdz' onClick={checkQuestion} />
						<input className='exam__exam-btn--next' type='button' value='dalej' onClick={nextQuestion} />
					</div>
					<div></div>
				</div>
			)}
		</div>
	)
}
export default Exam
