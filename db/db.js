var mongoose = require('mongoose');
var url = 'mongodb://testnode:tyu10f8x@ds047762.mongolab.com:47762/testnode';
var db  = mongoose.createConnection(url, function(err, res){
    if(err){
        throw(err);
    }else{
        console.log('Success connected: ' + url);
    }
});

// Modelの定義
exports.db = db;
