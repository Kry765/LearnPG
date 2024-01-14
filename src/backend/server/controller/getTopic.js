const Topic = require('../models/topic')

const getTopic = app => {
	app.get('/gettopic', (req, res) => {
		Topic.findAll({
			attributes: ['question_id', 'topic_name', 'topic_description'],
		})
			.then(topics => {
				const topicData = topics.map(topic => ({
					question_id: topic.question_id,
					topic_name: topic.topic_name,
					topic_description: topic.topic_description,
				}))
				res.json(topicData)
			})
			.catch(err => {
				console.log(err)
			})
	})
}

module.exports = getTopic
