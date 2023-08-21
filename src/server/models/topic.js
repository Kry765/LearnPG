const db = require('../database')
const { DataTypes } = require('sequelize')

const Topic = db.define(
	'topic',
	{
		topic_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		topic_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		topic_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
)

module.exports = Topic
