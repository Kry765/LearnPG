const { DataTypes } = require('sequelize')
const db = require('../database')
const Topic = require('./topic')

const OpenQuestion = db.define(
	'openquestions',
	{
		openquestion_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		question_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		nr_question_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
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

OpenQuestion.belongsTo(Topic, { foreignKey: 'question_id' })

module.exports = OpenQuestion
