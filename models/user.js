/* User */
var mongoose = require('mongoose');
var db  = require('../db/db').db;

// Modelの定義
var UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
	uid: String,
    pwd: String,
    email: String,
    emailconf: Boolean,
    emailconfkey: String,
    logintoken: String
},{collection: 'userinfo'});

exports.User = db.model('User', UserSchema);
