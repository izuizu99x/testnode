/* User */
var mongoose = require('mongoose');
var db  = require('../db/db').db;

// Modelの定義
var LabelUtilSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
    label: String
},{collection: 'labelutil'});

exports.LabelUtil = db.model('LabelUtil', LabelUtilSchema);
