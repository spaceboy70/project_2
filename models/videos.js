const {Schema, model} = require('mongoose');


const videoSchema = new Schema({
    title: {type: String, required: true},
    starring: [String],
    director: String,
    img: String,
    description: String,
    dvd: {type: Boolean, default: false},
    amazonPrime: {type: Boolean, default: false},
    googlePlay: {type: Boolean, default: false},
})

module.exports = model('Video', videoSchema);