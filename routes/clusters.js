const express = require('express');
const router = express.Router();
const  Cluster = require('../models/ClusterModel');

//  GET all CLUSTERS
router.get('/', function(req, res){
  Cluster.find({})
  .then(function(clusters){
    if(clusters != null){
      res.send(clusters)
    }else{
      res.status(400).send('Error: Clusters not found.')
    }
    }).catch((err) => console.error(err))
});

//  GET one CLUSTER by CLUSTERCODE
router.get('/:clusterCode', function(req, res){
  Cluster.findOne({clusterCode: req.params.clusterCode})
  .then(function(cluster){
    if(cluster != null){
      res.send(cluster)
    }else{
      res.status(400).send('Error: clusterCode not found.')
    }
    }).catch((err) => console.error(err))
});

//GET one CLUSTER ID by CLUSTERCODE
router.get('/:clusterCode/id', function(req, res){
  Cluster.findOne({clusterCode: req.params.clusterCode})
  .then(function(cluster){
    if(cluster != null){
      res.send({"_id": cluster._id})
    }else{
      res.status(400).send('Error: Cluster _id not found.')
    }
    }).catch((err) => console.error(err))
});


//GET one CLUSTER TITLE by CLUSTERCODE
router.get('/:clusterCode/title', function(req, res){
  Cluster.findOne({clusterCode: req.params.clusterCode})
  .then(function(cluster){
    if(cluster != null){
      res.send({"title": cluster.title})
    }else{
      res.status(400).send('Error: Cluster title not found.')
    }
    }).catch((err) => console.error(err))
});

//GET one CLUSTER DESCRIPTION by CLUSTERCODE
router.get('/:clusterCode/description', function(req, res){
  Cluster.findOne({clusterCode: req.params.clusterCode})
  .then(function(cluster){
    if(cluster != null){
      res.send({"description": cluster.description})
    }else{
      res.status(400).send('Error: Cluster description not found.')
    }
    }).catch((err) => console.error(err))
});


//GET one CLUSTER OCCUPATIONS LIST by CLUSTERCODE
router.get('/:clusterCode/occupations', function(req, res){
  Cluster.findOne({clusterCode: req.params.clusterCode})
  
  .then(function(cluster){
    if(cluster != null){
      res.send({"occupations": cluster.occupations})
    }else{
      res.status(400).send('Error: Cluster occupations not found.')
    }
    }).catch((err) => console.error(err))
});

module.exports = router;
