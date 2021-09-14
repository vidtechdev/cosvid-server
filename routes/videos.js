const express = require('express');
const router = express.Router();
const  Video = require('../models/VideoModel');

//  GET all VIDEOS
router.get('/', function(req, res){
  Video.find({})
  .then(function(videos){
    if(videos != null){
    res.send(videos)
    }else{
      res.status(400).send('Videos not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO by VIDEOCODE
router.get('/:videocode', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send(video)
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO ID by VIDEOCODE
router.get('/:videocode/id', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"_id": video._id})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO VIDEOTYPE by VIDEOCODE
router.get('/:videocode/videotype', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"videotype": video.videotype})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO TITLE by VIDEOCODE
router.get('/:videocode/title', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"title": video.title})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO TEXONOMY by VIDEOCODE
router.get('/:videocode/taxonomy', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"taxonomy": video.taxonomy})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO TRANSCRIPT by VIDEOCODE
router.get('/:videocode/transcript', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"transcript": video.transcript})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO CAPTIONS (ENGLISH) by VIDEOCODE
router.get('/:videocode/captions_en', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"captions_en": video.captions_en})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO CAPTIONS (SPANISH) by VIDEOCODE
router.get('/:videocode/captions_es', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"captions_es": video.captions_es})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

//  GET one VIDEO OCCUPATIONS LIST by VIDEOCODE
router.get('/:videocode/occupations', function(req, res){
  Video.findOne({videocode: req.params.videocode})
  .then(function(video){
    if(video != null){
    res.send({"occupations": video.occupations})
    }else{
      res.status(404).send('Videocode not found.');
    }
  }).catch((err) => console.log(err))
});

module.exports = router;