const db = require('../database')
const { DataTypes } = require('sequelize')

const User = db.define(
	'user',
	{
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_pwd: {
			type: DataTypes.STRING(80),
			allowNull: false,
		},
		user_point: {
			type: DataTypes.INTEGER,
		},
	},
	{ timestamps: false }
)

module.exports = User
