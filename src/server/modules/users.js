const User = require('../models/user')
const express = require('express')
const getUser = express.Router()
//GET

getUser.get('/test', (req, res, next) => {
	console.log('Received GET request at /test')
	User.findAll()
		.then(users => {
			res.status(200).json({ users: users })
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({ error: 'Internal server error' })
		})
})

module.exports = getUser
