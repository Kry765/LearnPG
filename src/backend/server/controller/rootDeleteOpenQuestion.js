const OpenQuestion = require('../models/open_question')

const rootDeleteOpenQuestion = app => {
	app.post('/rootdeleteopenquestion', async (req, res) => {
		const { deleteQuestionId } = req.body
		try {
			const TopicToDelete = await OpenQuestion.findOne({ where: { openquestion_id: deleteQuestionId } })

			if (!TopicToDelete) {
				return res.status(404).json({ message: 'Topic not found.' })
			}

			await TopicToDelete.destroy()
			return res.status(200).json({ message: 'Topic deleted successfully' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Server Error' })
		}
	})
}

module.exports = rootDeleteOpenQuestion
