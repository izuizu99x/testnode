//
// トップページコントローラー
//
module.exports = {
	// トップページ描画
	'index': function (req, res, next) {
		res.render('index', { title: 'TestNode' });
	}
};
