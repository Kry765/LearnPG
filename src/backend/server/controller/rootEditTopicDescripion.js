const Topic = require('../models/topic')

const rootEditTopicDescription = app => {
	app.post('/edittopicdescription', async (req, res) => {
		const { idEditTopicDescription, editTopicDesription } = req.body
		const setTopicName = await Topic.update(
			{ topic_description: editTopicDesription },
			{ where: { question_id: idEditTopicDescription } }
		)
		try {
			if (setTopicName) {
				return res.status(200).json({ message: 'Change topic description complete' })
			} else {
				return res.status(404).json({ message: 'Topic description not found' })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootEditTopicDescription
