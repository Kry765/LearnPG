const db = require('../database')
const { DataTypes } = require('sequelize')

const Answer = db.define(
	'answer',
	{
		answer_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		answer_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = Answer
