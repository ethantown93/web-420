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


const auth_controller = require('../controllers/authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);


module.exports = router; 