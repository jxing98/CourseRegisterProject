const express = require('express')
const course = require('../controllers/course')

let router = express.Router()

// Router
router.get('/course', course.getCourse)
router.post('/course', course.addCourse)

module.exports = router
