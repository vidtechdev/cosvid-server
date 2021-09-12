const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PathwaySchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    clusterCode: {
        type: String,
    },
    code: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    occupations: {
        type: Array,
    },
});

module.exports = mongoose.model('Pathway', PathwaySchema);