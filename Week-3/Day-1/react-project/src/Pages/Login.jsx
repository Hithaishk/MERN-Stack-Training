import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; // Check authentication status

  const navigate = useNavigate();

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

  const handleLogout = () => {
    // Clear the authentication status and update the UI
    sessionStorage.setItem("isLoggedIn", "false");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
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
      // Your fetch and API call code remains the same
      // ...
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message);
        setErrors({});
        
        sessionStorage.setItem("isLoggedIn", "true"); // Set user as logged in
        navigate("/");
        
      } else if (response.status === 401) {
        setErrors({ email: "Invalid email or password" });
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white w-40">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">{isLoggedIn ? "Logout" : "Login"}</h3>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <>
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
                <button className="btn btn-primary">Sign in</button>
              </div>
              <p className="text-center mt-1">
                Forget <Link to="">Password ?</Link>
                <Link to="/signup" className="ms-2">
                  Sign up
                </Link>
              </p>
            </>
          )}
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

export default Login;
