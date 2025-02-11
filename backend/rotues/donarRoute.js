const express = require('express');
const router = express.Router();
const { getDonors, createDonor, updateDonor, deleteDonor, searchDonors, getDonorsWithPagination } = require('../controllers/donarController');

// Donor Routes
router.get('/', getDonors);               // Get all donors
router.post('/', createDonor);            // Add a donor
router.put('/:id', updateDonor);          // Update a donor
router.delete('/:id', deleteDonor);       // Delete a donor
router.get('/search', searchDonors);      // Search donors
router.get('/paginated', getDonorsWithPagination); // Paginated donors

module.exports = router;
