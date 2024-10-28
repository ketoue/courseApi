const express = require("express");
const { createCourse, getCourses, updateCourse, getOneCourse} = require('../Controller/course');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('')
    .get(protect, getCourses) // Protégé par middleware 'protect'
    .post(protect,createCourse) // Création d'une course
    .put(protect, updateCourse); // Mise à jour d'une course, protégé par middleware 'protect'

router.route('/:id')
    .get(protect, getOneCourse); // Protégé par middleware 'protect'

module.exports = router;
