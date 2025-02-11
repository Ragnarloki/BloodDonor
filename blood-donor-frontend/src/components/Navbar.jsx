import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Blood Donor App</Link>
        <div className="flex gap-4">
          <Link to={"/donars"} className="hover:underline">Find Donors</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/chatbot" className="hover:underline">chatbot</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
