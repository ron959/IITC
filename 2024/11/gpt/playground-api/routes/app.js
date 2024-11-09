require('dotenv').config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));


app.use(express.json());  // Middleware to parse JSON

// Import routes
const jokeRoutes = require('./routes/jokes');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

// Use routes
app.use('/jokes', jokeRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
