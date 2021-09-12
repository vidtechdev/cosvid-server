const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    videocode: {
        type: String,
        required: true,
    },
    videotype: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    taxonomy: {
        type: String,
        required: true,
    },
    transcript: {
        type: String,
        required: true,
    },
    captions_en: {
        type: String,
    },
    captions_es: {
        type: String,
    },
    occupations: {
        type: Array,
        required: true,
    },
    // TO DO
    // youtubeid: {
    //     type: String,
    // }
});

module.exports = mongoose.model('Video', VideoSchema);