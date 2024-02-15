const OpenQuestion = require('../models/open_question')

const rootAddOpenQuestions = app => {
	app.post('/rootaddopenquestion', async (req, res) => {
		try {
			const { questionId, nrQuestionId, questionName, correctAnswer } = req.body

			const newOpenQuestion = await OpenQuestion.create({
				question_id: questionId,
				nr_question_id: nrQuestionId,
				question: questionName,
				correct_answer: correctAnswer,
			})

			res.status(201).json({ message: 'Open question added successfully', openQuestion: newOpenQuestion })
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Internal server Error' })
		}
	})
}

module.exports = rootAddOpenQuestions
