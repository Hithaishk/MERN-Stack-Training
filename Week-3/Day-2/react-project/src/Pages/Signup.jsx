//Signup.jsx
import React  from 'react';
import {Link} from "react-router-dom"
import "./Login.css"

function Signup() {
    return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className=" form_container p-5 rounded bg-white  shadow">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              name="text"
              placeholder="Enter Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
            />
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
