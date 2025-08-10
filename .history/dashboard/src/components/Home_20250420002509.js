import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};



import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.post("http://localhost:3002/auth", {}, { withCredentials: true })
      .then(({ data }) => {
        if (data.status) {
          setUsername(data.user);
        } else {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log("Auth error", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {username}!</h2>
      <p>This is the home page after login.</p>
    </div>
  );
}

export default Home;
