
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.name || !validateName(formData.name)) {
      validationErrors.name = "Invalid name";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      validationErrors.email = "Invalid email";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status ===400) {
        setMessage(data.message);
        setErrors({});
      }
     else  if (response.status === 409) {
        setMessage();
        setErrors({email:"Email already exists"});
      }

      else if (response.status === 201) {
        setMessage(data.message);
        setErrors({});
      } else {
        setMessage("");
        setErrors(data);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white w-40">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="form-control"
            />
            <div className="error text-danger">{errors.name}</div>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-control"
            />
            <div className="error text-danger">{errors.email}</div>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="form-control"
            />
            <div className="error text-danger">{errors.password}</div>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-4">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign up</button>
          </div>
          <p className="text-center mt-1">
            Already Registered
            <Link to="/login" className="ms-2">
              Sign in
            </Link>
          </p>
          {message && (
            <div className="success text-success text-center fs-6">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
