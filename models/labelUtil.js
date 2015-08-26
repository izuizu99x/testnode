//
// ラベルオブジェクトモデル
//
var mongoose = require('mongoose');
var db  = require('../db/db');

// スキーマの定義
var LabelUtilSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
    label: String
},{collection: 'labelutil'});

// モデルオブジェクトのエクスポート
module.exports = {
	'LabelUtil': function (next) {
		db.dbConnection(function (err, connection) {
			if (err) {
				next(err);
			}
			else {
				next(null, connection.model('LabelUtil', LabelUtilSchema));
			}
		});
	}
};
