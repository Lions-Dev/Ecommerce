import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tienda from "./Tienda";
import Footer from "./Footer";
import About from "./About"
import Nav from "./Nav";

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
