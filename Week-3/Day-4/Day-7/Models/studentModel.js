//studentModel.js
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    USN:{
        type:String,
        required:true,
        Unique:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        required:true,
        Unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
},
 {timestamps:true}
);

module.exports=new mongoose.model("Student",studentSchema)