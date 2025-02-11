const Donor = require('../models/Donar');

// Get all donors
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a donor
const createDonor = async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a donor
const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDonor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a donor
const deleteDonor = async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Donor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search donors
const searchDonors = async (req, res) => {
  try {
    const { bloodType, location, availability } = req.query;
    const filters = {};
    if (bloodType) filters.bloodType = bloodType;
    if (location) filters.location = new RegExp(location, 'i');
    if (availability !== undefined) filters.availability = availability === 'true';

    const donors = await Donor.find(filters);
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Paginated donors
const getDonorsWithPagination = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const donors = await Donor.find()
      .limit(Number(limit))
      .skip((page - 1) * limit);

    const total = await Donor.countDocuments();

    res.status(200).json({ donors, totalPages: Math.ceil(total / limit), currentPage: Number(page) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDonors, createDonor, updateDonor, deleteDonor, searchDonors, getDonorsWithPagination };
