const db = require('../database')
const { DataTypes } = require('sequelize')

const Topic = db.define(
	'labolatory',
	{
		labolatory_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		lab_index: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		lab_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lab_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		lab_correct: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
)

module.exports = Topic
