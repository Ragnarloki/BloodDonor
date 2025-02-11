import React from 'react';
import Navbar from '../components/Navbar';
import DonarForm from '../components/DonorForm'
const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to the Blood Donor App</h1>
        <DonarForm />
      </div>
    </div>
  );
};

export default Home;
