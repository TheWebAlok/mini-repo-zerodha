import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup } from './pages'; // pages/index.js se import

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
