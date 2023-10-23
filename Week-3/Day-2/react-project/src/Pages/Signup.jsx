//Signup.jsx
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./Login.css"

function Signup() {
  const [formData, setFormData] = useState({
    text:'',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    const newErrors = {};
    if (formData.text === '') {
      newErrors.name = 'Name is Required';
    }
    if (formData.email === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.password === '') {
      newErrors.password = 'Password is required';
    }
  
    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can store the email and password in sessionStorage
      sessionStorage.setItem('lastEmail', formData.email);
      sessionStorage.setItem('lastPassword', formData.password);
  
      // Clear the errors
      setErrors({});
    }
  };
  

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className=" form_container p-5 rounded bg-white w-40">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              name="text"
              value={formData.text}
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
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-4">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p className="text-center mt-1">
            Already Registered
            <Link to="/login" className="ms-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
