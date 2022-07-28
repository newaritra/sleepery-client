import logo from "./logo.svg";
import "./App.css";
import ScreenOne from "./components/screens/ScreenOne";
import ScreenContext from "./components/screens/context/ScreenContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScreenTwo from "./components/screens/ScreenTwo";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

function App() {
  return (
    <ScreenContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen-one" element={<ScreenOne />} />
          <Route path="/screen-two" element={<ScreenTwo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ScreenContext>
  );
}

export default App;
