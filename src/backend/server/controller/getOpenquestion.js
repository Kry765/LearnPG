const Question = require('../models/open_question')

const getOpenQuestion = app => {
	app.get('/getopenquestion/:question_id', (req, res) => {
		const { question_id } = req.params

		Question.findAll({
			where: { question_id },
			attributes: ['openquestion_id', 'question', 'correct_answer'],
		})
			.then(questions => {
				if (!questions || questions.length === 0) {
					return res.status(404).json({ error: 'Questions not found' })
				}

				const questionsData = questions.map(question => ({
					openquestion_id: question.openquestion_id,
					question: question.question,
					correct_answer: question.correct_answer,
				}))

				res.json(questionsData)
			})
			.catch(err => {
				console.log(err)
				res.status(500).json({ error: 'Internal Server Error' })
			})
	})
}

module.exports = getOpenQuestion
