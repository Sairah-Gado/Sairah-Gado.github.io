import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Home from "./Pages/Home/Home.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import Footer from "./Pages/Footer/Footer.jsx"
import "./App.css";



function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;

