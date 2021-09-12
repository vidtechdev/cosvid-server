const express = require('express');
const router = express.Router();
const  Pathway = require('../models/PathwayModel');

// PATHWAY ROUTES
// GET all PATHWAYS
router.get('/', function(req, res) {
  Pathway.find({})
  .then(function(pathways){
    if(pathways != null){
      res.send(pathways)
    }else{
      res.status(400).send('Pathways data could not be found.')
    }
  })
});

// GET one PATHWAY ID by PATHWAY CODE
router.get('/:code/id', function(req, res) {
  Pathway.findOne({ code: req.params.code})
  .then(function(pathway){
    if(pathway != null){
    res.send(pathway._id)
    }else{
      res.status(400).send('Pathway code not found.')
    }
  }).catch((err) => console.log.log(err))
});


// GET one PATHWAY CLUSTERCODE by PATHWAY CODE
router.get('/:code/clustercode', function(req, res) {
  Pathway.findOne({ code: req.params.code})
  .then(function(pathway){
    if(pathway != null){
      res.send(pathway.clusterCode)
    }else{
      res.status(400).send('Pathway code not found.')
    }
  }).catch((err) => console.log.log(err))
});

// GET one PATHWAY by PATHWAY CODE
router.get('/:code', function(req, res) {
  Pathway.findOne({ code: req.params.code})
  .then(function(pathway){
    if(pathway != null){
    res.send(pathway)
    }else{
      res.status(400).send('Pathway code not found.')
    }
  }).catch((err) => console.log.log(err))
});

// GET one PATHWAY TITLE by PATHWAY CODE
router.get('/:code/title', function(req, res) {
  Pathway.findOne({ code: req.params.code})
  .then(function(pathway){
    if(pathway != null){
    res.send(pathway.title)
    }else{
      res.status(400).send('Pathway code not found.')
    }
  }).catch((err) => console.log.log(err))
});

// GET one PATHWAY OCCUPATIONS LIST by PATHWAY CODE
router.get('/:code/occupations', function(req, res) {
  Pathway.findOne({ code: req.params.code})
  .then(function(pathway){
    if(pathway != null){
    res.send(pathway.occupations)
    }else{
      res.status(400).send('Pathway code not found.')
    }
  }).catch((err) => console.log.log(err))
});

module.exports = router;
