const express = require('express')
const User = require('../models/user')

const createUser = app => {
	app.post('/create', async (req, res) => {
		try {
			const { user_email, user_pwd } = req.body
			const newUser = await User.create({ user_email, user_pwd })
			res.status(201).json(newUser)
		} catch (err) {
			console.error(err)
			res.status(500).json({ err: 'error' })
		}
	})
}

module.exports = createUser
