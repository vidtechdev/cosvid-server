const express = require('express');
const router = express.Router();

require('dotenv').config();
const { CDN, VIDROOT, THUMBROOT, VTTROOT, CLUSTERROOT, TUTORIALROOT, MP4, JPG, ENVTT, ESVTT, } = process.env;
const request = require('request');

// Video Asset Endpoints
router.get('/video/:onet', (req, res, next) => {
  const onet = req.params.onet;
  // console.log(req.headers.range);
  const url = CDN+VIDROOT+onet+MP4;
  request(url).pipe(res);
});

router.get('/video/cluster/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const url = CDN+CLUSTERROOT+fileName+MP4;
  request(url).pipe(res);
});

router.get('/video/tutorial/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const url = CDN+TUTORIALROOT+fileName+MP4;
  request(url).pipe(res);
});

router.get('/poster/:onet', (req, res) => {
  const onet = req.params.onet;
  const poster = CDN+VIDROOT+onet+JPG;
  request(poster).pipe(res);
});

router.get('/poster/cluster/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const poster = CDN+CLUSTERROOT+fileName+JPG;
  request(poster).pipe(res);
});
router.get('/poster/tutorial/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const url = CDN+TUTORIALROOT+fileName+JPG;
  request(url).pipe(res);
});

router.get('/thumb/:onet', (req, res) => {
  let onet = req.params.onet;
  let thumb = CDN+THUMBROOT+onet+JPG;
  request(thumb).pipe(res);
});

router.get('/caption/en/:onet', (req, res) => {
  request(CDN+VTTROOT+req.params.onet+ENVTT).pipe(res);

});
router.get('/caption/es/:onet', (req, res) => {
  request(CDN+VTTROOT+req.params.onet+ESVTT).pipe(res);
});

module.exports = router;