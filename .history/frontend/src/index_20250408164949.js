import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./landing_page/home/HomePage.js";
import Homepage from "./landing_page/signup/Signu";
import Homepage from "./landing_page/home/HomePage.js";
import Homepage from "./landing_page/home/HomePage.js";
import Homepage from "./landing_page/home/HomePage.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  </BrowserRouter>
);
