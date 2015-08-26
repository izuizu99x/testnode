//
// ラベルユーティリティコントローラー
//

// ラベルモデルの取得
var config = require('../config/config');
var model = require('../models/labelUtil');

// コントローラーのエクスポート
module.exports = {
	// ラベルダイアログ描画
	'labelDialog': function (req, res, next) {
		var lang = req.acceptsLanguages(config.acceptLanguages);
		var searchKey = req.params.id + lang;
		model.LabelUtil(function (err, LabelUtil) {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				LabelUtil.find({_id: searchKey}, function (err, label) {
					if (err) {
						console.log(err);
						res.send(JSON.stringify({result: 'NG'}));
					}
					else {
						var labelText = '';
						if (label.length > 0) {
							labelText = label[0].label;
						}
						res.render('labelDialog', {
							targetId: req.params.id,
							targetKey: searchKey,
							targetLabel: labelText
						});
					}
				});
			}
		});
	},
	// ラベルの参照
	'getLabel': function (req, res, next) {
		var lang = req.acceptsLanguages(config.acceptLanguages);
		var searchKey = req.params.id + lang;
		model.LabelUtil(function (err, LabelUtil) {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				LabelUtil.find({_id: searchKey}, function (err, label) {
					if (err) {
						console.log(err);
						res.send(JSON.stringify({result: 'NG'}));
					}
					else {
						res.send(JSON.stringify({result: 'OK', targetId: req.params.id, data: label}));
					}
				});
			}
		});
	},
	// ラベルの登録＆更新
	'registerLabel': function (req, res, next) {
		var lang = req.acceptsLanguages(config.acceptLanguages);
		var searchKey = req.params.id + lang;
		model.LabelUtil(function (err, LabelUtil) {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				LabelUtil.findOne({_id: searchKey}, function (err, label) {
					if (err) {
						res.send(JSON.stringify({result: 'NG'}));
					}
					else {
						if (label) {
							label.label = req.body.label;
						}
						else {
							label = new LabelUtil(req.body);
							label._id = searchKey;
						}
						console.log(label);
						label.save(function(err){
							if(err){
								console.log(err);
								res.send(JSON.stringify({result: 'NG'}));
							}
							else {
								res.send(JSON.stringify({result: 'OK'}));
							}
						});
					}
				});
			}
		});
	}
};
