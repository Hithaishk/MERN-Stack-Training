const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require('cors');
// app.use(cors());

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://hithaish:%40123@cluster0.larynjs.mongodb.net/new",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Create a user schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// Define the validateEmail function
const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
};

// Middleware for parsing JSON
app.use(bodyParser.json());

// Route to handle user registration (Signup)
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate the email format using the validateEmail function
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// ... (other routes and server code)





// Route to handle user login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Basic server-side validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Find the user by email and password
  const user = await User.findOne({ email, password }).maxTimeMS(200000);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.status(200).json({ message: "Login successful" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
