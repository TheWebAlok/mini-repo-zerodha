import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./landing_page/home/HomePage";
import Homepage from "./landing_page/signup/Signup";
import Homepage from "./landing_page/about/About";
import Homepage from "./landing_page/home/pro";
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
