const express = require('express');
const mongoose = require('mongoose');
const Users_router = require('../routes/users');

const app = express();
const port = 3000;

async function connect_to_database() {
    try {
        await mongoose.connect('mongodb://localhost:27017/REST');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connect_to_database();

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello User');
});

app.use(express.json());
app.use('/users', Users_router); 

