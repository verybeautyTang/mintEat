const mongoose = require('mongoose')
let people = mongoose.Schema({
    name: String,
    age: Number
})
module.exports = mongoose.model('person',people)