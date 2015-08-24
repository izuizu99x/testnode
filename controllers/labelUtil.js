var model = require('../models/labelUtil');
var LabelUtil = model.LabelUtil;

module.exports = {
	'labelDialog': function (req, res, next) {
		var lang = req.acceptsLanguages('ja', 'en', 'zh');
		var searchKey = req.params.id + lang;
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
	},
	'getLabel': function (req, res, next) {
		var lang = req.acceptsLanguages('ja', 'en', 'zh');
		var searchKey = req.params.id + lang;
		console.log(req.body);
		console.log(searchKey);
		LabelUtil.find({_id: searchKey}, function (err, label) {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				res.send(JSON.stringify({result: 'OK', targetId: req.params.id, data: label}));
			}
		});
	},
	'registerLabel': function (req, res, next) {
		var lang = req.acceptsLanguages('ja', 'en', 'zh');
		var searchKey = req.params.id + lang;
		console.log(req.body);
		console.log(searchKey);
		LabelUtil.findOne({_id: searchKey}, function (err, label) {
			if (err) {
				res.send(JSON.stringify({result: 'NG'}));
			}
			else {
				if (label) {
					label.label = req.body.label;
					console.log('Update');
				}
				else {
					console.log('Create');
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
};
