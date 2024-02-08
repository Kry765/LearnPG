const User = require('../models/user')

const getUser = app => {
	app.get('/getUser', (req, res, next) => {
		User.findAll()
			.then(users => {
				res.status(200).json({ users: users })
			})
			.catch(err => {
				console.log(err)
				res.status(500).json({ error: 'Internal server error' })
			})
	})
}

module.exports = getUser
