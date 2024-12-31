const mongoose = require('mongoose');

// MongoDB URI from environment variable (fallback to localhost if not set)
const mongoUri = process.env.MONGO_URI || 'mongodb://3.110.182.4:27017/todoApp';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  // Optional: this depends on your version of MongoDB and Mongoose
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
