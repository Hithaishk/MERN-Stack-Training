//studentController.js
const CourseModel = require("../Models/courseModel.js");
const Validation = require("./Validation.js");

let createCourse = async (req, res) => {
  try {
    let data = req.body;
    if (!Validation.isValidBody(data)) {
      return res.status(400).send({ status: false, msg: "No data Provided" });
    }
    let { CourseName, CourseCode,Department,Credits, Fees } = data;
    if (!Validation.isValid(CourseName)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter courseName" });
    } 
    
    if (!Validation.isValid(CourseCode)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Course code" });
    }

    if (!Validation.isValid(Department)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Department" });
    }

    if (!Validation.isValid(Credits)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Credits" });
    }

    if (!Validation.isValid(Fees)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Fees" });
    }

    let registerCourse = await CourseModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Course Data Registered successfully",
      data: registerCourse,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};
// controllers/courseController.js

let getAllCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    if (!courses) {
      return res.status(404).send({ status: false, msg: "No courses found" });
    }
    return res.status(200).send({
      status: true,
      msg: "All courses retrieved successfully",
       courses,
    });
  } catch (error) {
    return res.status(500).send({ status: false, msg: "Internal Server Error" });
  }
};

module.exports = { createCourse,getAllCourses };
