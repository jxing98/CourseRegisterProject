const { Sequelize } = require('sequelize')

// Please use your own database name, username and password here
const dbName = 'course'
const userName = 'root'
const passWord = '1122334455'

// mysql configuration file
const sequelize = new Sequelize(dbName, userName, passWord, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize