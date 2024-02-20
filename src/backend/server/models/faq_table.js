const db = require('../database')
const { DataTypes } = require('sequelize')

const Faq = db.define(
	'faq',
	{
		faq_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		faq_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		faq_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
)

module.exports = Faq
