const Topic = require('../models/question')

const getQuestion = app => {
	app.get('/question', (req, res) => {
		Topic.findAll({
			attributes: ['question_name', 'answer_input_correct'],
		})
			.then(questions => {
				const questionData = questions.map(topic => ({
					question_name: topic.question_name,
					answer_input_correct: topic.answer_input_correct,
				}))
				res.json(questionData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getQuestion
