import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDiagnose from "./components/AddDiagnose";
import Chat from "./components/Chat";
import GetPatientHistory from "./components/GetPatientHistory";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Chart from "./components/Chart"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Navbar statusPage={0} />} />
          <Route path="/signup" element={<Navbar statusPage={1} />} />
          <Route path="/chat" element={<Navbar statusPage={2} />} />
          <Route path="/diagnose/add" element={<Navbar statusPage={2} />} />
          <Route path="/PatientHistory" element={<Navbar statusPage={2} />} />
          <Route path="/" element={<Navbar statusPage={2} />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat name={"vishwa Sandaruwan"} />} />
          <Route path="/diagnose/add" element={<AddDiagnose />} />
          <Route path="/PatientHistory" element={<GetPatientHistory />} />
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
