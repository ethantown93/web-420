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

const User = module.exports = mongoose.model('User', userSchema);

// database queries


module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    let query = {_id: id};
    User.findById(query, callback);
};