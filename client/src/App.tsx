import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDiagnose from "./components/AddDiagnose";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diagnose/add" element={<AddDiagnose />} />
          <Route path="/chat" element={<Chat name={"vishwa Sandaruwan"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
