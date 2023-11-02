const express = require("express");
const TripRegistration = require("../model/TripReg");

const router = express.Router();

// Create a new registration
router.post("/register", async (req, res) => {
  try {
    const { selectedDate, name, age, gender, selectedPackage } = req.body;

    const tripRegistration = new TripRegistration({
      selectedDate,
      name,
      age,
      gender,
      selectedPackage,
    });

    const registration = await tripRegistration.save();
    res.status(201).json(registration);
  } catch (err) {
    res.status(500).send("Error registering the trip.");
  }
});
// In your backend route file (TripRegRoute.js)
router.post("/registerPerson", async (req, res) => {
  try {
    const { name, age, gender } = req.body;

    // Create a new person entry and save it to the database
    const newPerson = new TripRegistration({
      name,
      age,
      gender,
    });

    const person = await newPerson.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(500).send("Error adding a person.");
  }
});

// Retrieve all registrations
router.get("/registrations", async (req, res) => {
  try {
    const registrations = await TripRegistration.find().exec();
    res.json(registrations);
  } catch (err) {
    res.status(500).send("Error retrieving registrations.");
  }
});

// Retrieve a single registration by ID
router.get("/registrations/:id", async (req, res) => {
  const registrationId = req.params.id;
  try {
    const registration = await TripRegistration.findById(registrationId).exec();
    if (!registration) {
      res.status(404).send("Registration not found.");
    } else {
      res.json(registration);
    }
  } catch (err) {
    res.status(500).send("Error retrieving the registration.");
  }
});

// Update a registration by ID
// Update a registration by ID
router.put("/registrations/:id", async (req, res) => {
  const registrationId = req.params.id;
  const { selectedDate, name, age, gender, selectedPackage } = req.body;

  try {
    const existingRegistration = await TripRegistration.findById(
      registrationId
    ).exec();

    if (!existingRegistration) {
      return res.status(404).send("Registration not found.");
    }

    // Update the existing document
    existingRegistration.selectedDate = selectedDate;
    existingRegistration.name = name;
    existingRegistration.age = age;
    existingRegistration.gender = gender;
    existingRegistration.selectedPackage = selectedPackage;

    const updatedRegistration = await existingRegistration.save();
    res.json(updatedRegistration);
  } catch (err) {
    res.status(500).send("Error updating the registration.");
  }
});

// Delete a registration by ID
router.delete("/registrations/:id", async (req, res) => {
  const registrationId = req.params.id;

  try {
    const deletedRegistration = await TripRegistration.findByIdAndRemove(
      registrationId
    ).exec();
    if (!deletedRegistration) {
      res.status(404).send("Registration not found.");
    } else {
      res.json(deletedRegistration);
    }
  } catch (err) {
    res.status(500).send("Error deleting the registration.");
  }
});

module.exports = router;
