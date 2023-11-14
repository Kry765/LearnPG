import axios from 'axios'
import { useEffect, useHistory, useState } from 'react'

function Exam() {
	const API_URL = 'http://localhost:4000'
	const [questions, setQuestions] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [results, setResults] = useState({ correct: 0})
	const history = useHistory()

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
			alert(isAnswerCorrect ? 'Poprawna odpowiedź!' : 'Niestety, odpowiedź niepoprawna.')
		} else {
			alert('Coś poszło nie tak. Spróbuj ponownie później.')
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
		<div>
			<div>Egzamin z działu:</div>
			<div>
				<p></p>
			</div>
			{questions.length > 0 && (
				<div>
					<div>Pytanie nr. {currentQuestion + 1}</div>
					<label>
						<input
							type='radio'
							value='0'
							checked={selectedAnswer === 0}
							onChange={e => setSelectedAnswer(Number(e.target.value))}
						/>
						A. {questions[currentQuestion].answer_a}
					</label>

					<label>
						<input
							type='radio'
							value='1'
							checked={selectedAnswer === 1}
							onChange={e => setSelectedAnswer(Number(e.target.value))}
						/>
						B. {questions[currentQuestion].answer_b}
					</label>

					<label>
						<input
							type='radio'
							value='2'
							checked={selectedAnswer === 2}
							onChange={e => setSelectedAnswer(Number(e.target.value))}
						/>
						C. {questions[currentQuestion].answer_c}
					</label>

					<input type='button' value='sprawdz' onClick={checkQuestion} />
					<input type='button' value='dalej' onClick={nextQuestion} />
				</div>
			)}
		</div>
	)
}
export default Exam
