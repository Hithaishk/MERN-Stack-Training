//studentController.js
const StudentModel = require("../Models/studentModel.js");
const Validation = require("./Validation.js");
let jwt=require("jsonwebtoken")

let createStudent = async (req, res) => {
  try {
    let data = req.body;
    if (!Validation.isValidBody(data)) {
      return res.status(400).send({ status: false, msg: "No data Provided" });
    }

    let { Name, USN, Gender, Email, Mobile, Password } = data;
    if (!Validation.isValid(Name)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your Name" });
    }
    if (!Validation.isValidName.test(Name)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid name" });
    }

    if (!Validation.isValid(USN)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your USN" });
    }
    if (!Validation.isValid(Gender)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your Gender" });
    }

    if (!Validation.isValid(Email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your Email" });
    }

    if (!Validation.isValidEmail.test(Email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Email" });
    }

    let dubEmail = await StudentModel.findOne({ Email });
    if (dubEmail) {
      return res.status(400).send({ msg: "Email already exist" });
    }

    if (!Validation.isValid(Mobile)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your Mobile" });
    }

    if (!Validation.isValidMobile.test(Mobile)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Mobile" });
    }

    if (!Validation.isValid(Password)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter your password" });
    }

    let registerStudent = await StudentModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Student Data Registered successfully",
      data: registerStudent,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};

//Login Studnet
let loginStudent = async (req, res) => {
  try {
    let data = req.body;
    if (!Validation.isValidBody(data)) {
      return res.status(404).send({ status: false, msg: "No DAta provided" });
    }

    let { Email, Password } = data;
    if (!Validation.isValid(Email)) {
      return res
        .status(404)
        .send({ status: false, msg: "Please Enter your Email" });
    }
    if (!Validation.isValid(Password)) {
      return res
        .status(404)
        .send({ status: false, msg: "Please Enter your Password" });
    }
    let matchStudent = await StudentModel.findOne({ Email, Password });
    if (!matchStudent) {
      return res.status(200).send({ msg: "Student not Registered" });
    }else{
        const token=jwt.sign({
          studentId:matchStudent._id.toString(),
        }, "MERN STACK",{
          expiresIn:"20000sec",
        }
        );
        return res.status(200).send({msg:"Student logged In successfull"})
    }
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};

module.exports = { createStudent,loginStudent};
