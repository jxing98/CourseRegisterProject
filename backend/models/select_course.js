// selected course table schema
const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const SelectSCourse = seq.define('select_course', {
  courseId: {
    type: DataTypes.STRING,
    name: 'course_id',
    allowNull: false
  },
  studentId: {
    type: DataTypes.STRING,
    name: 'student_id',
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT
  }
})


module.exports = SelectSCourse
