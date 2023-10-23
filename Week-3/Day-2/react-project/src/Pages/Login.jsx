//Login.jsx
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./Login.css"
import {useNavigate} from "react-router-dom"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const storedEmail = sessionStorage.getItem('lastEmail') || '';
const storedPassword = sessionStorage.getItem('lastPassword') || '';


const handleSubmit = (e) => {
  e.preventDefault();

  // Basic validation
  const newErrors = {};
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
    // Compare the input values with the stored values
    if (formData.email !== storedEmail || formData.password !== storedPassword) {
      // newErrors.general = 'Invalid email or password';
      setErrorMessage('Invalid email or password');
        // alert('Invalid email or password');
      setErrors(newErrors);
    } else {
      // Successful login
      // Clear the errors
      setErrors({});
      // To navigate to the next page
        navigate('/');
      
    }
  }
};

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className=" form_container p-5 rounded bg-white w-40">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>
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
            Forget <Link to="">Password ?</Link>
            <Link to="/Signup" className="ms-2">
              Sign up
            </Link>
          </p>
          {errorMessage && <div className="error text-danger text-center fs-6">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
