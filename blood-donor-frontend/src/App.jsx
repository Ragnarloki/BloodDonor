import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donars from './pages/Donors'
import Register from './pages/Register';
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Chatbot from './components/ChatBot';
const App = () => {
  return (
    <Router>
         <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donars" element={<Donars />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<Chatbot />} />
          
        {/* Add other routes like Donors, Login, Register */}
      </Routes>
    </Router>
  );
};

export default App;
