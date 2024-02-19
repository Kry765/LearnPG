const CloseQuestion = require('../models/close_question')

const rootEditCloseQuestion = app => {
	app.post('/rooteditclosequestion', async (req, res) => {
		const {
			editCorrectAnswer,
			editCloseQuestionC,
			editCloseQuestionB,
			editCloseQuestionA,
			editCloseQuestionName,
			editCloseQuestionId,
		} = req.body
		const existingQuestion = await CloseQuestion.findOne({ where: { closequestion_id: editCloseQuestionId } })
		if (!existingQuestion) {
			return res.status(404).json({ message: 'Close Question not found' })
		}
		const setNewCloseQuestion = await CloseQuestion.update(
			{
				question: editCloseQuestionName,
				answer_a: editCloseQuestionA,
				answer_b: editCloseQuestionB,
				answer_c: editCloseQuestionC,
				correct_answer: editCorrectAnswer,
			},
			{ where: { closequestion_id: editCloseQuestionId } }
		)
		try {
			if (setNewCloseQuestion) {
				return res.status(200).json({ message: 'Close Question cahnge complete' })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootEditCloseQuestion
