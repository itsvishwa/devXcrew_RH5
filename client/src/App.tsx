import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDiagnose from "./components/AddDiagnose";
import Chat from "./components/Chat";
import GetPatientHistory from "./components/GetPatientHistory";
import { Navbar } from "./components/Navbar";
<<<<<<< HEAD
import { useState } from "react";
import { Provider } from "react-redux";
// import { store } from "./store";
// import { UploadFile } from "./components/UploadFile";
=======
>>>>>>> 72de15a0083a24523bd14825f227d0ea4d1aedfd

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
=======
          <Route path="/chat" element={<Chat name={"vishwa Sandaruwan"} />} />
>>>>>>> 72de15a0083a24523bd14825f227d0ea4d1aedfd
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diagnose/add" element={<AddDiagnose />} />
          <Route path="/PatientHistory" element={<GetPatientHistory />} />
          {/* <Route path="/PatientReportUpload" element={<UploadFile />} /> */}
        </Routes>
    </Router>
    </div >
  );
}

export default App;
