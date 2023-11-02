//TripReg.js
const mongoose = require("mongoose");



const tripRegistrationSchema = new mongoose.Schema({
  user: String, // Add a 'user' field to associate the registration with a user
  selectedDate: Date,
  name: String,
  age: Number,
  gender: String,
  selectedPackage: String,
});

const TripRegistration = mongoose.model("TripRegistration", tripRegistrationSchema);

module.exports = TripRegistration;
