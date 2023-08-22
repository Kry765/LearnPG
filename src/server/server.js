const express = require('express')
const db = require('./database')
const app = express()
const cors = require('cors')
const port = 4000
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))

db.authenticate()
	.then(() => {
		console.log('Database connected')
		return db.sync()
	})
	.then(() => {
		const User = require('./models/user')
		const Question = require('./models/question')
		const Topic = require('./models/topic')
		const Answer = require('./models/answer')

		User.sync()
		Question.sync()
		Answer.sync()
		Topic.sync()

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch(error => {
		console.error(error)
	})

const createUser = require('./modules/createUser')
const loginUser = require('./modules/loginUser')
const getTopic = require('./modules/getTopic')

createUser(app)
loginUser(app)
getTopic(app)
