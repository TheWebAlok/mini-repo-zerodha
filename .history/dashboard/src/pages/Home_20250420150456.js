import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const notify = () => toast("Welcome to Home Page!");

  return (
    <div>
      <h1>Home Page</h1>
      <button className='btn btn-success' onClick={notify}>Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default Home;
