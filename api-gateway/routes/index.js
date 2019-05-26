/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/


const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;