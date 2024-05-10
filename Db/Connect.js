require('dotenv').config()
const mongoose = require('mongoose')
const connect_String = process.env.connect_String

const connectDb = async()=>{
    await mongoose.connect(connect_String)
    return console.log('db is conected')
}

module.exports = connectDb