const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const scheduleReminders = require('./utils/cronScheduler');

const app = express();
const PORT = 3000;

connectDB();
scheduleReminders();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

