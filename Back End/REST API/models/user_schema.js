const mongoose = require('mongoose');
const moment = require('moment');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: moment().format('MMM DD, YYYY, HH:mm')
    },
});
//model being basically a class that will store its instances as documents/objects
const Users = mongoose.model('User',UserSchema);
module.exports = Users;