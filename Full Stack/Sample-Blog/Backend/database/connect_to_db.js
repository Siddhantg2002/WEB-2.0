const mongoose = require('mongoose');
const Latest_Blogs_data_feeding = require('./Latest_Blogs_data_feeding');
const All_blogs_data_feeding = require('./All_Blogs_data_feeding');

const connect_to_database = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Sample-Blogs');
        console.log("Connected to database");
    } catch (error) {
        console.error("Failed to connect to database:");
    }
    try {
        await Latest_Blogs_data_feeding();
    } catch (error) {
        console.error("Latest Blogs data feeding failed");
    }
    try {
        await All_blogs_data_feeding();
    } catch (error) {
        console.error("All Blogs data feeding failed");
    }
    
}

module.exports = connect_to_database