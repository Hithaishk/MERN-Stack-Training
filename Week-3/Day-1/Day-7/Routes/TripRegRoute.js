//TripRegRoute.js
const express = require("express");
const TripRegistration = require("../model/TripReg");
const router = express.Router();



// Create a new registration
// Create a new registration
router.post("/register", async (req, res) => {
  try {
    const { selectedDate, name, age, gender, selectedPackage, user } = req.body; // Include the "user" field

    // Ensure that the user is authenticated
    if (!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const newPerson = new TripRegistration({
      user,
      selectedDate,
      name,
      age,
      gender,
      selectedPackage,
    });

    const person = await newPerson.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(500).send("Error registering the trip.");
  }
});




// Retrieve a single registration by ID
// Retrieve all registrations
router.get("/registrations", async (req, res) => {
  const user = req.headers['user-email']; // Get user email from headers

  try {
    if (!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Retrieve only the registrations associated with the authenticated user
    const registrations = await TripRegistration.find({ user }).exec();
    res.json(registrations);
  } catch (err) {
    res.status(500).send("Error retrieving registrations.");
  }
});

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
