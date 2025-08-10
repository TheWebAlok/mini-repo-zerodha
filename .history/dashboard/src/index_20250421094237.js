import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home'
import { BrowserRouter, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);