import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
function Package() {
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row">
            {/* <!-- Basic Trip Hosting --> */}
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto mt-5">
              <div className="card text-white bg-primary">
                <div className="card-header">
                  <h2 className="text-center">
                    Basic <br />
                    Trip Package
                  </h2>
                </div>
                <div className="card-body">
                  <p className="text-center">Explore new destinations</p>
                  <div className="price-section text-center">
                    <span className="fs-2">₹999</span>
                    <span className="per-head">/head</span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Guided Tours
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Accommodation
                    Included
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Transportation
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-times text-danger"></i> Meals Not
                    Included
                  </li>
                </ul>
                <div className="card-body text-center">
                  <Link className="btn btn-warning" to="/Form">
                    Book Now
                  </Link>
                  <p className="text-white">Limited Time Offer</p>
                </div>
              </div>
            </div>

            {/* <!-- Premium Trip Package --> */}
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto mt-5">
              <div className="card text-white bg-danger">
                <div className="card-header">
                  <h2 className="text-center">
                    Premium <br />
                    Trip Package
                  </h2>
                </div>
                <div className="card-body">
                  <p className="text-center">Luxury travel experience</p>
                  <div className="price-section text-center">
                    <span className="fs-2">₹1999</span>
                    <span className="per-head">/head</span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Private Tours
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> 5-Star
                    Accommodation
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> All-Inclusive
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Gourmet Meals
                  </li>
                </ul>
                <div className="card-body text-center">
                  <Link className="btn btn-success" to="./form">
                    Book Now
                  </Link>
                  <p className="text-white">Luxury Redefined</p>
                </div>
              </div>
            </div>

            {/* <!-- Ultimate Trip Package --> */}
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto mt-5">
              <div className="card text-white bg-info">
                <div className="card-header">
                  <h2 className="text-center">
                    Ultimate <br />
                    Trip Package
                  </h2>
                </div>
                <div className="card-body">
                  <p className="text-center">Unforgettable adventures</p>
                  <div className="price-section text-center">
                    <span className="fs-2">₹2999</span>
                    <span className="per-head">/head</span>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Customized
                    Itineraries
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Exclusive
                    Experiences
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Luxury
                    Transportation
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check text-success"></i> Gourmet Dining
                  </li>
                </ul>
                <div className="card-body text-center">
                <Link className="btn btn-success" to="./form" >Book Now</Link>
                  <p className="text-white">Your Dream Trip Awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
