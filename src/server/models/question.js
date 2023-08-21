const db = require('../database')
const { DataTypes } = require('sequelize')

const Question = db.define(
	'question',
	{
		question_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		question_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = Question
