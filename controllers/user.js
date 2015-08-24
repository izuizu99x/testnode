var model = require('../models/user');
var User = model.User;

module.exports = {
	'getUsers': function (req, res, next) {
		res.send('respond with a resource');
	},
	'login': function (req, res, next) {
		console.log(req.body)
		res.send('{result: "OK"}');
	},
	'signup': function (req, res, next) {
		console.log(req.body)
		var newUser = new User(req.body);
		newUser._id = req.body.uid;
		newUser.save(function(err){
			if(err){
				console.log(err);
				res.send('{result: "NG"}');
			}
			else {
				res.send('{result: "OK"}');
			}
		});
	}
};
