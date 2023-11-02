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
		answer_a: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answer_b: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answer_c: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correct_answer: {
			type: DataTypes.ENUM('A', 'B', 'C'),
			allowNull: false,
			defaultValue: 'A',
		},
	},
	{ timestamps: false }
)

module.exports = CloseQuestion
