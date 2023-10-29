//route.js
// const express=require("express")
// const router=express.Router()

// const StudentController=require("../controllers/studentController")

// router.post("/register",StudentController.createStudent);

// module.exports=router;

const express=require("express")
const router=express.Router()

const CourseController=require("../controllers/courseController")

router.post("/Courseregister",CourseController.createCourse);

module.exports=router;