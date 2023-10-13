const Question = require('../models/open_question')

const getOpenQuestion = app => {
	app.get('/getopenquestion', (req, res) => {
		Question.findAll({
			attributes: ['question', 'correct_answer'],
		})
			.then(questions => {
				const questionData = questions.map(question => ({
					question: question.question,
					correct_answer: question.correct_answer,
				}))
				res.json(questionData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getOpenQuestion
