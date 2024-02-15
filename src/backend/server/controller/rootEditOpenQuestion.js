const OpenQuestion = require('../models/open_question')

const rootEditOpenQuestion = app => {
	app.post('/rooteditopenquestion', async (req, res) => {
		const { editOpenQuestionId, editOpenQuestion, editCorrectAnswer } = req.body
		const setOpenQuestion = await OpenQuestion.update(
			{ question: editOpenQuestion, correct_answer: editCorrectAnswer },
			{ where: { openquestion_id: editOpenQuestionId } }
		)
		try {
			if (!setOpenQuestion) {
				return res.status(404).json({ message: 'Open Question not found' })
			} else {
				return res.status(200).json({ message: 'Change question complete' })
			}
		} catch (error) {
			return res.status(500).json({ message: 'Server Error' })
		}
	})
}

module.exports = rootEditOpenQuestion
