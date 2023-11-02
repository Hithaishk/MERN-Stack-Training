import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Places from "./Pages/Places";
import Signup from "./Pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Package from "./Pages/Package";
import TripReg from "./Pages/TripReg.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Places />} path="/Places" />
          <Route element={<Package />} path="/Package" />
          <Route element={<TripReg />} path="/Form" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
