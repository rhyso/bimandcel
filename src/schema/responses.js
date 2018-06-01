var mongoose = require('mongoose');

Response = new mongoose.Schema({
    person: String,
    answer: Boolean,
});

mongoose.model("Response", Response);

module.exports = mongoose.model('Response');