const Question = require('../models/open_question')

const getOpenQuestion = app => {
	app.get('/getopenquestion/:question_id', (req, res) => {
		const { question_id } = req.params

		Question.findOne({
			where: { question_id },
			attributes: ['question_id', 'question', 'correct_answer'],
		})
			.then(question => {
				if (!question) {
					return res.status(404).json({ error: 'Question not found' })
				}

				const questionData = {
					question_id: question.question_id,
					question: question.question,
					correct_answer: question.correct_answer,
				}

				res.json(questionData)
			})
			.catch(err => {
				console.log(err)
				res.status(500).json({ error: 'Internal Server Error' })
			})
	})
}

module.exports = getOpenQuestion
