const db = require('../database')
const { DataTypes } = require('sequelize')

const OpenQuestion = db.define(
	'openquestions',
	{
		openquestion_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		question: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correct_answer: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = OpenQuestion
