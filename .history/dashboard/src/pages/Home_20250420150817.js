import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();

  const notifyAndRedirect = () => {
    toast("Welcome to Home Page!");

    // Delay for 2 seconds before redirect
    setTimeout(() => {
      navigate("/login"); // Change to "/signup" or any page you want
    }, 2000); // 2000ms = 2s
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button className='btn btn-success' onClick={notifyAndRedirect}>
        Click Me
      </button>
      <ToastContainer />
    </div>
  );
};

export default Home;
