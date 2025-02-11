import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDonors, setFilteredDonors] = useState([]);

  // Fetch donors from the backend
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donors');
        setDonors(response.data);
        setFilteredDonors(response.data); // Initially set filtered list to all donors
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter donors based on name or blood type
    const filtered = donors.filter(
      (donor) =>
        donor.name.toLowerCase().includes(term.toLowerCase()) ||
        donor.bloodType.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredDonors(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find Donors</h1>
      
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or blood type"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Donors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <div
              key={donor._id}
              className="p-4 border rounded shadow bg-white"
            >
              <h2 className="text-lg font-bold">{donor.name}</h2>
              <p>Blood Type: {donor.bloodType}</p>
              <p>Contact: {donor.contact}</p>
              <p>Location: {donor.location}</p>
              <p>
                Availability:{' '}
                <span
                  className={`${
                    donor.availability ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {donor.availability ? 'Available' : 'Not Available'}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>No donors found.</p>
        )}
      </div>
    </div>
  );
};

export default Donors;
