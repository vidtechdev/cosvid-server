const express = require('express');
const router = express.Router();
const  Occupation = require('../models/OccupationModel');

//  GET all OCCUPATIONS
router.get('/', function(req, res){
  Occupation.find({})
  .then(function(occupation){ 
    if(occupation != null){
      res.send(occupation)
    }else{
      res.status(400).send('Occupations not found.')
    }
  }).catch((err) => console.log(err))
});

//  GET one OCCUPATION by CODE
router.get('/:code', function(req, res, next){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){ 
    if(occupation != null){
      res.send(occupation)
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION ID by CODE
router.get('/:code/id', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({"_id":occupation._id})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION TITLE by CODE
router.get('/:code/title', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({'title': occupation.title})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION DESCRIPTION by CODE
router.get('/:code/description', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({"description": occupation.description})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION VIDEOCODE by CODE
router.get('/:code/videocode', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({"videocode": occupation.videocode})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION CLUSTERS LIST by CODE
router.get('/:code/clusters', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({"clusters": occupation.clusters})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

// GET one OCCUPATION PATHWAYS LIST by CODE
router.get('/:code/pathways', function(req, res){
  Occupation.findOne({code: req.params.code})
  .then(function(occupation){
    if(occupation != null){
      res.send({"pathways": occupation.pathways})
    }else{
      res.status(400).send('Occupation code not found.')
    }
  }).catch((err) => console.log(err))
});

module.exports = router;