const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const donorRoutes = require('./rotues/donarRoute');
const userRoutes = require('./rotues/userRoutes');

dotenv.config();
const app = express();
const cors = require('cors');

// Allow requests from the frontend
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/users', userRoutes);

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
