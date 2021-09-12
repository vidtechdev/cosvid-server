const express = require('express');
const router = express.Router();

// Routes (db collection-specific)
const clusterRouter = require('./clusters');
const occupationRouter = require('./occupations');
const pathwayRouter = require('./pathways');
const videoRouter = require('./videos');

// initialize routes
router.use('/clusters', clusterRouter);
router.use('/occupations', occupationRouter);
router.use('/pathways', pathwayRouter);
router.use('/videos', videoRouter);

module.exports = router;