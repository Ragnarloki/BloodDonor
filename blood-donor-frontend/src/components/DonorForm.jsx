import React, { useState } from 'react';
import { createDonor } from '../api/api';

const DonorForm = ({ onDonorCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    contact: '',
    location: '',
    availability: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDonor = await createDonor(formData);
      onDonorCreated(newDonor.data);
      
      // Show success alert
      alert('Donor registered successfully!');

      // Refresh the page
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed to register donor. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Register as a Donor</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Blood Type</label>
        <input
          type="text"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Availability</label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value={true}>Available</option>
          <option value={false}>Not Available</option>
        </select>
      </div>
      <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
};

export default DonorForm;
