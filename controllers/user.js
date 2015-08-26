//
// ユーザーコントローラー
//
var model = require('../models/user');

module.exports = {
	// ユーザー一覧
	'getUsers': function (req, res, next) {
		res.send('respond with a resource');
	},
	// ログイン処理
	'login': function (req, res, next) {
		console.log(req.body)
		res.send('{result: "OK"}');
	},
	// サインアップ処理
	'signup': function (req, res, next) {
		console.log(req.body)
		model.User(function (err, User) {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				var newUser = new User(req.body);
				newUser._id = req.body.uid;
				newUser.save(function(err){
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
};
