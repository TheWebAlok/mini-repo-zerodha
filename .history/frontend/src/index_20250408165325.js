import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/About";
import Homepage from "./landing_page/product/Product";

import Homepage from "./landing_page/home/HomePage.js";
import Pricing from "./landing_page/home/Pricing.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/pricin" element={<Pricing />}/>
      <Route path="/support" element={<Support />}/>
    </Routes>
  </BrowserRouter>
);
