import axios from 'axios'
import { useState } from 'react'

function Exam() {
	const API_URL = 'http://localhost:4000'
	const [questions, setQuestions] = useState([])
	const handleClick = () => {
		axios
			.get(URL + '/getopenquestion')
			.then(response => {
				const questionData = response.data
				setQuestions(questionData)
			})
			.catch(error => {
				console.error('Error fetching questions:', error)
			})
	}

	return (
		<div>
			<div>Egzamin z działu: </div>
			{questions.map((question, index) => (
				<div key={index}>
					<p>{question.question}</p>
				</div>
			))}
			<div>Pytanie</div>
			<input></input>
			<input type='button' value='sprawdz' onClick={handleClick} />
		</div>
	)
}

export default Exam
