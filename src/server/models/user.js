const db = require('../database')
const { DataTypes } = require('sequelize')
const User = db.define('user', {
	user_email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	user_pwd: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

module.exports = User
