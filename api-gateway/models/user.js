/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});

module.exports = mongoose.model('User', userSchema);