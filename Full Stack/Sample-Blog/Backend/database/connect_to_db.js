const mongoose = require('mongoose');

const connect_to_database = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Sample-Blogs');
        console.log("Connected to database");
    } catch (error) {
        console.error("Failed to connect to database:");
    }
}

module.exports = connect_to_database