import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDiagnose from "./components/AddDiagnose";
import Chat from "./components/Chat";
import GetPatientHistory from "./components/GetPatientHistory";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const setloginfunction = () => {
    setisLoggedIn(true);
  };
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn />
        <Routes>
          <Route
            path="/login"
            element={<Login setloginfunction={setloginfunction} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diagnose/add" element={<AddDiagnose />} />
          <Route path="/chat" element={<Chat name={"vishwa Sandaruwan"} />} />
          <Route
            path="/PatientDiagnosisTable"
            element={<GetPatientHistory />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
