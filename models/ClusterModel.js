const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClusterSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    clusterCode: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    occupations: {
        type: Array,
    },
});

module.exports = mongoose.model('Cluster', ClusterSchema);