const express = require('express')
const db = require('./database')
const getUser = require('./modules/users') //WYZNACZNIK
const User = require('./models/user')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS
app.use(cors())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

db.authenticate()
	.then(() => {
		console.log('OK')
	})
	.catch(err => {
		console.error(err)
	})

db.sync({ force: true })
	.then(() => {
		console.log('table OK')
	})
	.catch(err => {
		console.log(err)
	})

//REGISTER
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

app.use('./modules/users', getUser) //wyznacznik
app.use('./models/user', User)
