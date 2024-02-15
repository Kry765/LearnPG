const Topic = require('../models/topic')

const rootDropTopic = app => {
	app.post('/droptopic', async (req, res) => {
		const { dropTopic } = req.body
		try {
			const deleteTopic = await Topic.findOne({ where: { topic_name: dropTopic } })
			if (!deleteTopic) {
				return res.status(400).json({ message: 'Topic not found' })
			} else {
				await deleteTopic.destroy()
				return res.status(200).json({ message: 'Delete Topic' })
			}
		} catch (error) {
			console.log(error)
		}
	})
}

module.exports = rootDropTopic
