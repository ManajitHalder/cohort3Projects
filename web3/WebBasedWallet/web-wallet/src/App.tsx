// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from "./components/home"
import Login from "./components/Login";

function App() {

  return (
    <>
      <div className="bg-gray-700 h-screen w-screen">
        <Login />

        {/* <div>
          <Router>
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </div> */}
      </div>
    </>
  )
}

export default App
