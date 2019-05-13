/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";

config.web.secret = 'topsecret';

module.exports = config;