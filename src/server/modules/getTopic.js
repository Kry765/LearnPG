const Topic = require('../models/topic')
const express = require('express')

const getTopic = app => {
	app.get('/score', (req, res) => {
		Topic.findAll({
			attributes: ['topic_name', 'topic_description'],
		})
			.then(topics => {
				const topicData = topics.map(topic => ({
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
