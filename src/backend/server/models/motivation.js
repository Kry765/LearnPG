const db = require('../database')
const { DataTypes } = require('sequelize')

const Motivation = db.define(
	'motivation',
	{
		motivation_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		motivation_text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		motivation_author: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
)

module.exports = Motivation
