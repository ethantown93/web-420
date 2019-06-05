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


/**
 Database queries
 */

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}


module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};