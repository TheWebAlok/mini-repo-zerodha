import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      try {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        return status
          ? toast.success(`Hello ${user}`, { position: "top-right" })
          : (removeCookie("token"), navigate("/login"));
      } catch (err) {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleWelcome = () => {
    toast("Welcome to Home Page!");
    // You can navigate after a delay
    setTimeout(() => {
      navigate("/home"); // or any route you want to redirect to
    }, 2000); // 2 seconds delay
  };

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>

        {/* Welcome Toast + Navigation Button */}
        <button className="btn btn-success" onClick={handleWelcome}>
          Click Me
        </button>

        {/* Logout Button */}
        <button className="btn btn-danger" onClick={handleLogout}>
          LOGOUT
        </button>

        {/* Signup Button beside logout */}
        <button className="btn btn-primary" onClick={goToSignup}>
          SIGNUP
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
