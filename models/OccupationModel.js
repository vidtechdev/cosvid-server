const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OccupationSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videocode: {
        type: String,
    },
    clusters: {
        type: Array,
    },
    pathways: {
        type: Array,
    }
});

module.exports = mongoose.model('Occupation', OccupationSchema);