const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({

    CourseName:{
        type:String,
        required:true,
    },
    CourseCode:{
        type:String,
        required:true,
    },
    Department:{
        type:String,
        required:true,
    },
    Credits:{
        type:Number,
        required:true,
    },
    Fees:{
        type:String,
        required:true,
    },
},
 {timestamps:true}
);

module.exports=new mongoose.model("Course",courseSchema)