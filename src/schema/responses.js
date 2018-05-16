var mongoose = require('mongoose');

Response = new mongoose.Schema({
    name: String,
    answer: Boolean,
});

mongoose.model("Response", Response);

module.exports = mongoose.model('Response');