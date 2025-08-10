import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const notify = () => toast("Welcome to Home Page!");

  return (
    <div>
      <h1>Home Page</h1>
      <button className='btn btn-succuss' onClick={notify}>Click Me</button>
      <ToastContainer />
    </div>
  );
};

export default Home;
