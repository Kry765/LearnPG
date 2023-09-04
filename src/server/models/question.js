const db = require('../database')
const { DataTypes } = require('sequelize')

const questions = db.define(
	'questions',
	{
		question_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answer_input_correct: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
)

questions.associate = models => {
	questions.belongsTo(models.topic, {
		foreignKey: {
			name: 'topic_id',
			allowNull: false,
		},
		as: 'topic',
	})
}

module.exports = questions
