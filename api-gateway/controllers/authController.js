/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/

const User = require('../models/user');

// Register a new user
exports.user_register = function(req, res) {
 res.send('NOT IMPLEMENTED: User registration POST');
};


// Verify token 
exports.user_token = function(req, res) {
 res.send('NOT IMPLEMENTED: User token lookup GET');
};