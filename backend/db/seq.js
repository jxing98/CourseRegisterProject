const { Sequelize } = require('sequelize')

// mysql configuration file
const sequelize = new Sequelize('course', 'root', '1122334455', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize