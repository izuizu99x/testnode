//
// データベース接続モジュール
//

// とりあえずmongolabを使用
var mongoose = require('mongoose');
var url = 'mongodb://testnode:tyu10f8x@ds047762.mongolab.com:47762/testnode';
var connectionError;
var db  = mongoose.createConnection(url, function(err, res){
    if(err){
    	console.log(err);
    	connectionError = err;
    }else{
        console.log('Success connected: ' + url);
    }
});

// 接続オブジェクトのエクスポート
module.exports = {
	'dbConnection': function (next) {
		if (connectionError) {
			next(connectionError);
		}
		else {
			next(null, db);
		}
	}
};
