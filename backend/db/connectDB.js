const mongoose = require('mongoose');

const connectDB = () =>{
    return mongoose.connect('mongodb+srv://bluestar:Hackathon@cluster0.ewf0cut.mongodb.net/codemoon?retryWrites=true&w=majority')
}

module.exports = connectDB;