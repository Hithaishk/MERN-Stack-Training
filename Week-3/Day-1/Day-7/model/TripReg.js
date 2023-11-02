const mongoose = require("mongoose");

const tripRegistrationSchema = new mongoose.Schema({
  selectedDate: Date,
  name: String,
  age: Number,
  gender: String,
  selectedPackage: String,
});

const TripRegistration = mongoose.model(
  "TripRegistration",
  tripRegistrationSchema
);

module.exports = TripRegistration;
