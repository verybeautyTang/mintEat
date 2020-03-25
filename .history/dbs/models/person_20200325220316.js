const mongoose = require('mongoose')
let Person = mongoose.Schema({
    name: String,
    age: Number
})
module.exports = mongoose.model('person',Person)