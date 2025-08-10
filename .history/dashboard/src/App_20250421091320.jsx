import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "../../../PORTFOLIO/pages";
import Home from "../../../PORTFOLIO/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;