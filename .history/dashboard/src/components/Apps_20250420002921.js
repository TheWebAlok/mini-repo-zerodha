import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ya './Home' depending on location

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
