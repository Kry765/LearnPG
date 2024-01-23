import { useLocation } from 'react-router-dom'

function Result() {
	const location = useLocation()
	const { points, totalQuestions } = location.state || { points: 0, totalQuestions: 0 }

	return (
		<div>
			<h1>Wyniki Egzaminu</h1>
			<p>
				{points}/{totalQuestions}
			</p>
		</div>
	)
}

export default Result
