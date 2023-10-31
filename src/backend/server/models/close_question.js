const db = require('../database')
const { DataTypes } = require('sequelize')

const CloseQuestion = db.define(
	'closequestions',
	{
		closequestion_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		question: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answerA: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answerB: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answerC: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correctAnswer: {
			type: DataTypes.ENUM('A', 'B', 'C'),
			allowNull: false,
			defaultValue: 'A',
		},
	},
	{ timestamps: false }
)

module.exports = CloseQuestion
