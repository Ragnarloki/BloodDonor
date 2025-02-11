import React from 'react';
import { motion } from 'framer-motion';

const DonorCard = ({ donor }) => {
  return (
    <motion.div 
      className="border p-6 rounded-lg shadow-lg bg-white transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-red-600 mb-2">{donor.name}</h2>
      <p className="text-gray-700"><strong>Blood Type:</strong> {donor.bloodType}</p>
      <p className="text-gray-700"><strong>Location:</strong> {donor.location}</p>
      <p className="text-gray-700"><strong>Contact:</strong> {donor.contact}</p>
      <p className="text-gray-700"><strong>Available:</strong> <span className={donor.availability ? "text-green-600" : "text-red-600"}>{donor.availability ? 'Yes' : 'No'}</span></p>
    </motion.div>
  );
};

export default DonorCard;
