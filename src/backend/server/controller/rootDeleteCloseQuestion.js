const closeQuestion = require('../models/close_question')

const rootDeleteCloseQuestion = app => {
	app.post('/rootdeleteclosequestion', async (req, res) => {
		const { deleteCloseQuestion } = req.body
		try {
			const DeleteQuestion = await closeQuestion.findOne({ where: { closequestion_id: deleteCloseQuestion } })

			if (!DeleteQuestion) {
				return res.status(404).json({ message: 'Topic not found.' })
			}

			await DeleteQuestion.destroy()
			return res.status(200).json({ message: 'Topic deleted successfully' })
		} catch (err) {
			console.log(err)
			res.status(500).json({ message: 'Server Error' })
		}
	})
}

module.exports = rootDeleteCloseQuestion
