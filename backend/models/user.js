// user table schema
const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const User = seq.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'username'
  },
  name: {
    name: 'name',
    type: DataTypes.CHAR(64),
    allowNull: false
  },
})

module.exports = User
