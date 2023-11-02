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
		const Topic = require('./models/topic')
		const OpenQuestion = require('./models/open_question')
		const CloseQuestion = require('./models/close_question')

		User.sync()
		Topic.sync()
		OpenQuestion.sync()
		CloseQuestion.sync()

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch(error => {
		console.error(error)
	})

const createUser = require('./connection/createUser')
const loginUser = require('./connection/loginUser')
const getTopic = require('./connection/getTopic')
const qetOpenQuestion = require('./connection/getOpenquestion')
const getCloseQuestion = require('./connection/getCloseQuestions')

qetOpenQuestion(app)
getCloseQuestion(app)
createUser(app)
loginUser(app)
getTopic(app)
