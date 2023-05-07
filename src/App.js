import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;