const Topic = require('../models/topic')
const express = require('express')
const getTopic = express.Router()

getTopic.get('/score', (req, res) => {
	Topic.findOne()
		.then(topic => {
			if (topic === null) {
				console.log('Topic not found')
			} else {
				console.log(topic.topic_title)
			}
		})
		.catch(error => {
			console.error('Error fetching topic:', error)
		})
})

module.exports = getTopic
