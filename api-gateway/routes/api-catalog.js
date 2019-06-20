/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/

const express = require('express');
const checkToken = require('../check-token');
const router = express.Router();


const auth_controller = require('../controllers/authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);

// POST request to sign users in
router.post('/auth/login', auth_controller.user_login);

// GET request to log users out

router.get('/auth/logout', auth_controller.user_logout);



module.exports = router; 