const Question = require('../models/open_question')

const getOpenQuestion = app => {
	app.post('/getopenquestion/:question_id', (req, res) => {
		const { question_id } = req.params

		// Check if question_id is not provided or not a number
		if (!question_id || isNaN(question_id)) {
			return res.status(400).json({ error: 'Invalid question ID' })
		}

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
