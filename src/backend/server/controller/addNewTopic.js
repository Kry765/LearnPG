const Topic = require('../models/topic')
const addNewTopic = app => {
	app.post('/addnewtopic', async (req, res) => {
		try {
			const { topicName, topicDescription } = req.body
			const existingTopic = await Topic.findOne({
				where: {
					topic_name: topicName,
				},
			})
			if (existingTopic) {
				return res.status(400).json({ error: 'Dział już istnieje.' })
			}
			const addTopic = await Topic.create({
				topic_name: topicName,
				topic_description: topicDescription,
			})
			res.status(201).json(addTopic)
		} catch (error) {
			console.error(error)
			res.status(500).json({ error: 'Wystąpił błąd podczas dodawania nowego tematu.' })
		}
	})
}

module.exports = addNewTopic
