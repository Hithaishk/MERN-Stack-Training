// import React from 'react';
// import  Header from "./Components/Header";
// import Body from './Components/Body';
// import Footer from "./Components/Footer";
// import Boostrap from "./Components/Boostrap";

// const App=()=>{
//   return(
//     <>
//     <Boostrap/>
//     <Header/>
//     <Body/>
//     <Footer/>
//     </>
//   )
// }
// export default App;

import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login"

import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Contact/>} path="/contact" />
          <Route element={<About/>} path="/about" />
          <Route element={<Login/>} path="/login" />


        </Routes> 
          </BrowserRouter>
    </>
  )
}
export default App;