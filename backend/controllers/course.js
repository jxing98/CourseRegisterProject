const CourseModel = require("../models/course");
const UserModel = require("../models/user");
const SelectCourseModel = require("../models/select_course");

class Course {

  // Get course list, this api will be used for table
  async getCourse(req, res) {
    const { page, pageSize, ...courseInfo } = req.query;
    const result = await CourseModel.findAndCountAll({
      offset: Number(page - 1) * Number(pageSize) || 0,
      limit: Number(pageSize) || 10,
      where: { ...courseInfo },
    });

    res.send({
      code: 200,
      data: result,
    });
  }

  // Add selected course
  async addCourse(req, res) {
    const { courseId, email, name, comment } = req.body;

    // Find the user name use the user's email and verify whether this user is valild
    let user = await UserModel.findOne({ where: { email } });
    if (user) {
      if (user.dataValues.name !== name) {
        res.send({
          code: 201,
          message:
            "This email has been registered, please confirm your username",
        });
        return;
      }
      Course.selectCourse(
        res,
        req,
        user.dataValues.id,
        courseId,
        comment,
        false
      );
    } else {

      // save the user directly to user table if the user don't exist
      const tempUser = UserModel.build({ email, name });
      user = await tempUser.save();
      Course.selectCourse(
        res,
        req,
        user.dataValues.id,
        courseId,
        comment,
        true
      );
    }
  }

  // Handle course select logic
  static async selectCourse(res, req, studentId, courseId, comment, isNew) {

    // Whether the user has selected this course
    let targetCourse = await SelectCourseModel.findOne({
      where: {
        studentId,
        courseId,
      },
    });
    if (targetCourse) {
      res.send({
        code: 201,
        message: "Sorry, this course is already in your course list",
      });
      return;
    }

    // Get the corresponding course capacity, and check if the capacity is vaild
    targetCourse = await CourseModel.findOne({ where: { id: courseId } });

    // If the capacity is not vaild, but this is a new user, add this user but don't add the course
    if (targetCourse.dataValues.capacity < 1 && isNew) {
      res.send({
        code: 201,
        message:
          "Successfully registered a new user, but the class is full, and you are in waitlist",
      });
      return;
      
    // If the capacity is not vaild but this is not a new user, do nothing chnage and send back error
    } else if (targetCourse.dataValues.capacity < 1) {
      res.send({
        code: 201,
        message: "Sorry, the class is full, and you are in waitlist",
      });
      return;
    }

    // If capacity is vaild, Save the course for select_course table and course table
    const course = SelectCourseModel.build({ studentId, courseId, comment });
    const result = await course.save();
    await CourseModel.update(
      { capacity: targetCourse.dataValues.capacity - 1 },
      { where: { id: targetCourse.dataValues.id } }
    );
    
    if (result) {
    
    // Successfully register a new course for a exist user
      if (!isNew) {

        res.send({
          code: 200,
          message: "Successfully registered",
        });
        return;
      } else {
    
    // Successfully register a new course for a new user    
        res.send({
          code: 200,
          message: "Successfully registered a new user and successfully enrolled a course",
        });
      }
    }
  }
}

module.exports = new Course();
