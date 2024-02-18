const db = require('../database')
const { DataTypes } = require('sequelize')

const Admin = db.define(
	'admin',
	{
		admin_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		admin_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		admin_pwd: {
			type: DataTypes.STRING(80),
			allowNull: false,
		},
	},
	{ timestamps: false }
)

module.exports = Admin
