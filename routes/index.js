const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, '../public')));
router.use(express.static(path.join(__dirname, '../src')));

router.get('/', function(req, res, next) {
  res.sendFile('index');
});

router.get('/courses', (req, res) => {
  res.sendFile('courses');
});






module.exports = router;
