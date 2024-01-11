export const checkInputAnswer = (answer, question) => {
	const transformAnswer = answer.toLowerCase()
	const transformCorrectAnswer = question.correct_answer.toLowerCase()
	if (transformAnswer == transformCorrectAnswer) {
		console.log('ok')
	} else {
		console.log('no')
	}
}
