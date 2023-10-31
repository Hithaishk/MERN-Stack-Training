//route.js
// const express=require("express")
// const router=express.Router()

// const StudentController=require("../controllers/studentController")

// router.post("/register",StudentController.createStudent);
// router.post("/login",StudentController.loginStudent)
// module.exports=router;

const express=require("express")
const router=express.Router()

const CourseController=require("../controllers/courseController")

router.post("/Courseregister",CourseController.createCourse);
// routes/courseRoute.js



router.get("/courses", CourseController.getAllCourses);

module.exports=router; 