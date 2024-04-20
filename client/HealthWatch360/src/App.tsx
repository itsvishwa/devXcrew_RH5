import { useState } from 'react'
import './App.css'
import { Login } from './Components/Login'
import { SignUp } from './Components/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
