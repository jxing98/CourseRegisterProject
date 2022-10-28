const CourseModel = require('../models/course')
const UserModel = require('../models/user')
const SelectCourseModel = require('../models/select_course')

class Course {

  // Get course list
  async getCourse(req, res) {
    const { page, pageSize, ...courseInfo } = req.query

    const result = await CourseModel.findAndCountAll({
      offset: Number(page - 1) * Number(pageSize) || 0,
      limit: Number(pageSize) || 10,
      where: { ...courseInfo }
    })

    res.send({
      code: 200,
      data: result
    })
  }

  // Add selected course
  async addCourse(req, res) {
    const { courseId, email, name, comment } = req.body

    // Find the user name use the user's email and verify whether this user is valild
    let user = await UserModel.findOne({ where: { email } })
    if (user) {
      if (user.dataValues.name !== name) {
        res.send({
          code: 201,
          message:
            'This email has been registered, please confirm your username'
        })
        return
      }
      Course.selectCourse(user.dataValues.id, courseId, comment, res, req)
    } else {

    // save the user directly to user table if the user don't exist
      const tempUser = UserModel.build({ email, name })
      user = await tempUser.save()
      Course.selectCourse(user.dataValues.id, courseId, comment, res, req)
    }
  }

  // Handle course select logic
  static async selectCourse(studentId, courseId, comment, res, req) {

    // Whether the user has selected this course
    let targetCourse = await SelectCourseModel.findOne({
      where: {
        studentId,
        courseId
      }
    })
    if (targetCourse) {
      res.send({
        code: 201,
        message: 'Sorry, this course is already in your course list'
      })
      return
    }

    // Get the corresponding course capacity
    targetCourse = await CourseModel.findOne({ where: { id: courseId } })
    if (targetCourse.dataValues.capacity < 1) {
      res.send({
        code: 201,
        message: 'Sorry, the class is full, and you are in waitlist'
      })
      return
    }

    // Save the course for select_course table and course table
    const course = SelectCourseModel.build({ studentId, courseId, comment })
    const result = await course.save()
    await CourseModel.update(
      { capacity: targetCourse.dataValues.capacity - 1 },
      { where: { id: targetCourse.dataValues.id } }
    )
    if (result) {
      res.send({
        code: 200,
        data: 'Successfully registered a new user and successfully enrolled a course'
      })
    }
  }
}

module.exports = new Course()
