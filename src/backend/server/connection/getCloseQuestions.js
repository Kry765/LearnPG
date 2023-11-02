const CloseQuestion = require('../models/close_question')

const getCloseQuestion = app => {
	app.get('/getclosequestion', (req, res) => {
		CloseQuestion.findAll({
			attributes: ['question', 'answer_a', 'answer_b', 'answer_c', 'correct_answer'],
		})
			.then(questions => {
				const questionData = questions.map(question => ({
					question: question.question,
					answer_a: question.answer_a,
					answer_b: question.answer_b,
					answer_c: question.answer_c,
					correct_answer: question.correct_answer,
				}))
				res.json(questionData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getCloseQuestion
