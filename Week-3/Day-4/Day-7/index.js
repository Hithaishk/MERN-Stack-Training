// // console.log("Hello everyone")

// const express = require("express"); //  used to import the packkage require=import
// const mongoose = require("mongoose");
// const app = express();


const express=require("express");
const mongoose=require("mongoose")
const app=express()

//DB Connection

mongoose.connect(
    "mongodb+srv://hithaish:Hithaish%40123@cluster0.larynjs.mongodb.net/"
).then(()=>{
    console.log("Database is connected successfully😎")
})
.catch((err)=>{
    console.log(err,"something went wrong")
})

// mongoose.connect(
//     "mongodb+srv://hithaish:Hithaish@123@cluster0.larynjs.mongodb.net/"
// ).then(()=>{
//     console.log("Database is connected")
// })
// .catch((err)=>{
//     console.log(err,"Error Not connecting")
// })


//test API
app.get("/test",(req,res)=>{
    res.send("Hello , This is Test Api")
});

app.listen(5000,()=>{
    console.log("Server is Running On port 5000")
});