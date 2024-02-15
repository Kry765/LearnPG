const Topic = require('../models/topic')

const rootEditTopicName = app => {
	app.post('/edittopicname', async (req, res) => {
		const { idEditTopic, editTopic } = req.body
		const setTopicName = await Topic.update({ topic_name: editTopic }, { where: { question_id: idEditTopic } })
		try {
			if (!setTopicName) {
				return res.status(404).json({ message: 'Topic not found' })
			} else {
				return res.status(200).json({ message: 'Change topic name complete' })
			}
		} catch (error) {
			res.status(500).json({ success: false, message: 'Server error.' })
		}
	})
}

module.exports = rootEditTopicName
