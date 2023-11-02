//Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {
  return (
    <>
      <div className="bg-light container-fluid">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade mt-5"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/19023234/GOKARNA-FEATURE-compressed.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>EXPLORE PLACE</h5>
                <p>Discover the places to visit in and around the area.</p>
                <Link to="./Places">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://dxtu9lzukmhux.cloudfront.net/deal-images/November2020/fp5JixKCDGB2pHUepdBx.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>BOOK YOUR STAY</h5>
                <p>
                  Discover the perfect accommodation in the coastal paradise of
                  Gokarna. Whether you prefer the comfort of a cozy room or the
                  adventure of a beachfront tent, we have you covered.
                </p>
                <Link to="./Places">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/19023234/GOKARNA-FEATURE-compressed.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block pb-3">
                <h5>RENT A BIKE</h5>
                <p>
                  Renting a bike is one of the cheapest and best ways to explore
                  Gokarna.
                </p>
                <Link to="./Places">
                  <button type="button" className="btn btn-dark">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container text-center mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card mt-5 mb-5 bg-dark card_css">
                <div className="card-div">
                  <h5 className="card-title text-light">ABOUT US</h5>
                  <p className="card-text text-light">
                    Welcome to Explore Gokarna, your ultimate guide to
                    uncovering the hidden gems of this beautiful coastal town.
                    We are here to make your journey through Gokarna a memorable
                    and hassle-free experience.
                  </p>
                  <Link to="./about" className="card-link">
                    <button type="button" className="btn btn-secondary">
                      MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card mt-5 mb-5 bg-dark card_css">
                <div className="card-div">
                  <h5 className="card-title text-light">OUR PACKAGES</h5>
                  <p className="card-text text-light">
                    Simplify your travel plans with our all-in-one package. One
                    simple card, endless possibilities. Explore Gokarna your
                    way.
                  </p>
                  <Link to="./Package" className="card-link">
                    <button type="button" className="btn btn-secondary">
                      MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-white bg-dark">
          <div className="container p-4"></div>
          <div className="text-center p-3 bg-dark">
            © 2023 Copyright:
            <Link className="text-white" to="#">
              Group C5
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
