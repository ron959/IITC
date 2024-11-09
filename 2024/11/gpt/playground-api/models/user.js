const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    role: { type: String, enum: ['Admin', 'User'], default: 'User' }
});

module.exports = mongoose.model('User', userSchema);
