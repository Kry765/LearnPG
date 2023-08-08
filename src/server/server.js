const express = require('express')
const db = require('./database')
const app = express()
const cors = require('cors')
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS
app.use(cors({ origin: 'http://localhost:3000' }))

//TEST CONNECTION
db.authenticate()
	.then(() => {
		console.log('Database connected')
		return db.sync({ force: true })
	})
	.then(() => {
		console.log('Table ok')
		app.listen(port, () => {
			console.log(`App is running on port ${port}`)
		})
	})
	.catch(err => {
		console.error(err)
	})

//CREATE TABLE
const User = require('./models/user')
app.use('./models/user', User)

//GET TABLE
const getUser = require('./modules/users') //WYZNACZNIK
app.use('./modules/users', getUser) //WYZNACZNIK

//REGISTER
const createUser = require('./modules/createUser')
app.use('./models/createUser', createUser)
