const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const scheduleReminders = require('./utils/cronScheduler');
const mongoose = require('mongoose');

// Initialize the express app
const app = express();

// Get the environment variables
const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/todoApp'; // Default MongoDB URI if not set in the environment
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Default JWT secret key if not set

// Connect to MongoDB using mongoose
connectDB(mongoUri);

// Schedule reminders using cron
scheduleReminders();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

