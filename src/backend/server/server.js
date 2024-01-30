const express = require('express')
const db = require('./database')
const app = express()
const cors = require('cors')
const port = 4000
const cookieParser = require('cookie-parser')
const verifyUser = require('./controller/verifyUser')
const postAddPoint = require('./controller/postAddPoint')
const resetPoint = require('./controller/resetPoint')
const bodyParser = require('body-parser')
const getUserPointHandler = require('./controller/getUserPoint')
const ResetEmailHandler = require('./controller/resetEmail')
const handleCheckUser = require('./controller/checkUser')

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		headers: 'Content-Type,Authorization',
		'Access-Control-Allow-Credentials': true,
	})
)

app.use('/addpoint', verifyUser)
app.use('/resetPoint', verifyUser)
app.use('/getscore', verifyUser)
app.use('/resetuseremail', verifyUser)
app.use('/checkUser', verifyUser)

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
		const MotivationHandler = require('./models/motivation')
		const FaqHandler = require('./models/faq')

		User.sync()
		Topic.sync()
		OpenQuestion.sync()
		CloseQuestion.sync()
		MotivationHandler.sync()
		FaqHandler.sync()

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch(error => {
		console.error(error)
	})

const createUser = require('./controller/createUser')
const loginUser = require('./controller/loginUser')
const getTopic = require('./controller/getTopic')
const qetOpenQuestion = require('./controller/getOpenquestion')
const getCloseQuestion = require('./controller/getCloseQuestions')
const DeleteUser = require('./controller/deleteUser')
const resetPasswordHandler = require('./controller/resetPassword')
const getMotivationsHandler = require('./controller/getMotivations')
const getFaqHandler = require('./controller/getFaq')
const handleLoggout = require('./controller/loggout')

qetOpenQuestion(app)
getCloseQuestion(app)
createUser(app)
loginUser(app)
getTopic(app)
ResetEmailHandler(app)
DeleteUser(app)
resetPasswordHandler(app)
getMotivationsHandler(app)
getUserPointHandler(app)
getFaqHandler(app)
postAddPoint(app)
resetPoint(app)
handleLoggout(app)
handleCheckUser(app)
