import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDiagnose from "./components/AddDiagnose";
import Chat from "./components/Chat";
import GetPatientHistory from "./components/GetPatientHistory";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/chat" element={<Chat name={"vishwa Sandaruwan"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diagnose/add" element={<AddDiagnose />} />
          <Route path="/PatientHistory" element={<GetPatientHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
