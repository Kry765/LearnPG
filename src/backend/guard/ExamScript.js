export const checkInputAnswer = (answer, question) => {
	const transformAnswer = answer.toLowerCase()
	const transformCorrectAnswer = question.correct_answer.toLowerCase()
	if (transformAnswer == '') {
		return 'Podana odpowiedź jest błędna'
	} else if (transformAnswer == transformCorrectAnswer) {
		return 'Poprawna odpowiedź, otrzymujesz punkt!'
	} else {
		return 'Podana odpowiedź jest błędna'
	}
}
