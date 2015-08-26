//
// ユーザーオブジェクトモデル
//
var mongoose = require('mongoose');
var db  = require('../db/db');

// スキーマの定義
var UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
	uid: String,
    pwd: String,
    email: String,
    emailconf: Boolean,
    emailconfkey: String,
    logintoken: String
},{collection: 'userinfo'});

// モデルオブジェクトのエクスポート
module.exports = {
	'User': function (next) {
		var connection = db.dbConnection(function (err) {
			if (err) {
				next(err);
			}
			else {
				next(null, connection.model('User', LabelUtilSchema));
			}
		});
	}
};
