const CloseQuestion = require('../models/close_question')

const rootAddCloseQuestion = app => {
	app.post('/rootaddclosequestion', async (req, res) => {
		try {
			const { closeQuestion, closeQuestionA, closeQuestionB, closeQuestionC, correctAnswer } = req.body

			const addCloseQuestion = await CloseQuestion.create({
				question: closeQuestion,
				answer_a: closeQuestionA,
				answer_b: closeQuestionB,
				answer_c: closeQuestionC,
				correct_answer: correctAnswer,
			})
			res.status(201).json({ message: 'Close question added successfully', openQuestion: addCloseQuestion })
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Internal server Error' })
		}
	})
}

module.exports = rootAddCloseQuestion
