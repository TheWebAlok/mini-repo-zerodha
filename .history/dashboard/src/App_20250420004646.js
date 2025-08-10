// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup } from './pages'; // Ye import tabhi kaam karega agar pages/index.js mein export kiya ho

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
