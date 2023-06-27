const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const port = 4000
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pool = new Pool({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	database: 'postgresql_tutorial',
	port: 5432,
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

//test server.js
const getUser = 'SELECT * FROM users'
app.get('/test', (req, res) => {
	pool
		.query(getUser)
		.then(result => {
			const data = result.rows
			res.json(data)
		})
		.catch(error => {
			console.error('Błąd:', error)
			res.status(500).json({ error: 'Wystąpił błąd serwera.' })
		})
})

//create user
app.post('/create', (req, res) => {
	const { user_email, user_pwd } = req.body
	const registerUser = 'INSERT INTO users (user_email, user_pwd) VALUES ($1, $2)'
	const values = [user_email, user_pwd]
	pool.query(registerUser, values, (error, values) => {
		if (error) {
			throw error
		} else {
			console.log('ok')
		}
	})
})

//login user
app.post('/log', (req, res) => {
	const { user_email, user_pwd } = req.body
	const loginUser = 'SELECT * FROM users WHERE user_email = ? AND user_pwd = ?'
	const values = [user_email, user_pwd]

	pool.query(loginUser, values, (error, values) => {
		if (error) {
			throw error
		} else {
			console.log('ok')
		}
	})
})
