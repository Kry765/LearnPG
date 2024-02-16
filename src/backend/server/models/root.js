const db = require('../database')
const { DataTypes } = require('sequelize')

const Root = db.define(
	'Root',
	{
		root_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		root_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		root_pwd: {
			type: DataTypes.STRING(80),
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = Root
