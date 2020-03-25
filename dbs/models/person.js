const mongoose = require('mongoose')
const people = mongoose.Schema({
    name: String,
    age: Number
})
module.exports = mongoose.model('person',people)