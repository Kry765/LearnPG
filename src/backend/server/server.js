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
const handleDeleteUser = require('./controller/deleteUser')
const resetPasswordHandler = require('./controller/resetPassword')

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
app.use('/deleteuser', verifyUser)
app.use('/resetuserpwd', verifyUser)

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
const getMotivationsHandler = require('./controller/getMotivations')
const getFaqHandler = require('./controller/getFaq')
const handleLoggout = require('./controller/loggout')
const handleGetUser = require('./controller/users')
const handleAddNewTopic = require('./controller/addNewTopic')
const handleRootDeleteUser = require('./controller/rootDeleteUser')
const handleRootClearPoint = require('./controller/rootClearPoint')
const handleRootResetPassword = require('./controller/rootResetPassword')
const handleRootChangeEmail = require('./controller/rootChangeEmail')
const handleRootDropTopic = require('./controller/rootDropTopic')
const handleRootEditTopicName = require('./controller/rootEditTopicName')
const handleRootEditTopicDescription = require('./controller/rootEditTopicDescripion')
const handleRootGetOpenQuestions = require('./controller/rootGetOpenQuestion')
const handleRootAddOpenQuestions = require('./controller/rootAddOpenQuestions')
const handleRootDeleteOpenQuestion = require('./controller/rootDeleteOpenQuestion')
const handleRootEditOpenQuestion = require('./controller/rootEditOpenQuestion')

qetOpenQuestion(app)
getCloseQuestion(app)
createUser(app)
loginUser(app)
getTopic(app)
ResetEmailHandler(app)
resetPasswordHandler(app)
getMotivationsHandler(app)
getUserPointHandler(app)
getFaqHandler(app)
postAddPoint(app)
resetPoint(app)
handleLoggout(app)
handleDeleteUser(app)
handleGetUser(app)
handleAddNewTopic(app)
handleRootDeleteUser(app)
handleRootClearPoint(app)
handleRootResetPassword(app)
handleRootChangeEmail(app)
handleRootDropTopic(app)
handleRootEditTopicName(app)
handleRootEditTopicDescription(app)
handleRootGetOpenQuestions(app)
handleRootAddOpenQuestions(app)
handleRootDeleteOpenQuestion(app)
handleRootEditOpenQuestion(app)
