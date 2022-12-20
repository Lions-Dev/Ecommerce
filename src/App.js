import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Tienda from "./components/Tienda/Tienda";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact"

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
