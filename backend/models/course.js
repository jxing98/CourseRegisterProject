// course table shcema
const seq = require('../db/seq')
const { DataTypes } = require('sequelize')
const Course = seq.define('course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'course name'
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'course capacity'
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'course year'
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'course semester'
  },
  courseId: {
    type: DataTypes.STRING,
    allowNull:false,
    comment: 'course number'
  }
})

module.exports = Course
