//About.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="bg-light">
        <div className="container md-2">
          <div className="row">
            <h2 className="font-fw-medium fw-bolder mt-5">About Us</h2>
            <p className="font-fw-medium">
              Welcome to Explore.in, your primary destination for uncovering the
              concealed wonders of the br/eathtaking coastal town of Gokarna. We
              are dedicated to ensuring that your exploration of Gokarna is not
              only memorable but also a truly hassle-free and exceptional
              experience. Our team is committed to providing you with the tools
              and information needed to create unforgettable memories during
              your visit to this remarkable destination. Thank you for choosing
              Explore.in as your trusted travel partner. We eagerly look forward
              to assisting you in making the most of your Gokarna experience.
            </p>
            <br />
            <br />
            <h3 className="font-fw-medium mt-4 fw-bolder">What We Offer</h3>
          </div>
          <div className="row pt-0">
            <div className="col-md-4 d-flex">
              <div className="card card1 mt-5 p-3">
                <h4 className="font-fw-medium pt-3 p-2">
                  Explore Nearby Places
                </h4>
                <div className="card-div">
                  <p className="card-text font-fw-medium">
                    Our platform is designed to introduce you to the stunning
                    locales in and around Gokarna. Whether you're an adventurer,
                    a nature enthusiast, or a beach lover, we've got the inside
                    scoop on the must-visit destinations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <div className="card card1 mt-5 p-3">
                <h4 className="font-fw-medium p-2">Renting Services</h4>
                <div className="card-div">
                  <p className="card-text font-fw-medium">
                    We're your go-to source for renting equipment and
                    accommodations. Looking for a bike to explore the town?
                    We've got you covered. Want to find the perfect place to
                    stay? We can assist with that too.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="card card1 mt-5 p-3">
                <h4 className="font-fw-medium pt-3 p-2">Travel Assistance</h4>
                <div className="card-div">
                  <p className="card-text font-fw-medium">
                    Navigating Gokarna has never been easier. Our team is
                    dedicated to helping you make the most of your visit. From
                    local tips to travel advice, we're here to ensure your
                    Gokarna adventure is unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-fw-medium p-2 mt-3">
            Our mission is to equip you with the comprehensive tools and
            essential information required to elevate your visit to Gokarna into
            an extraordinary and unforgettable experience. With our unwavering
            assistance, you will have the ability to delve deeper into the
            area's hidden gems, tap into the right resources, and craft
            enduring, indelible memories.
            <br />
            <br />
            We extend our heartfelt gratitude to you for selecting Explore.in as
            your dependable travel companion. It is our earnest desire to assist
            you in maximizing your Gokarna experience, and we eagerly anticipate
            being a part of your memorable journey
          </p>
        </div>

        <footer className="text-center text-white mb-0 bg-dark">
          <div className="container p-4"></div>

          <div className="text-center p-3 bg-dark">
            © 2023 Copyright:
            <Link className="text-white" to="#">
              Group C5
            </Link>
          </div>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          async
          defer
        ></script>
      </div>
    </>
  );
}

export default About;
