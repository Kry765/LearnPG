const Question = require('../models/open_question')

const getOpenQuestions = app => {
	app.get('/getopenquestions/:question_id', async (req, res) => {
		try {
			const { question_id } = req.params

			const questions = await Question.findAll({
				where: { question_id: question_id },
				attributes: ['question_id', 'nr_question_id', 'question', 'correct_answer'],
			})

			if (!questions || questions.length === 0) {
				return res.status(404).json({ error: 'No questions found for the provided question_id' })
			}

			const questionsData = questions.map(question => ({
				question_id: question.question_id,
				nr_question_id: question.nr_question_id,
				question: question.question,
				correct_answer: question.correct_answer,
			}))

			res.json(questionsData)
		} catch (err) {
			console.error(err)
			res.status(500).json({ error: 'Internal Server Error' })
		}
	})
}

module.exports = getOpenQuestions
