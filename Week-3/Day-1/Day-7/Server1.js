const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const app = express();

app.use(cookieParser());



app.use(cors());
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://hithaish:Hithaish%40123@cluster0.larynjs.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database is connected successfully😎");
  })
  .catch((err) => {
    console.log(err, "something went wrong");
  });

// Create a user schema and model
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: true },
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
  

  const userEmail = req.body.email; // Get the user's email from the request
  res.cookie("user", userEmail); // Set a cookie named "user" with the user's email
  return res.status(200).json({ message: "Login successful" });
});
const tripRegistrationRoutes = require("./Routes/TripRegRoute");
app.use("/api", tripRegistrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
