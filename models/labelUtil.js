/* User */
var mongoose = require('mongoose');
var url = 'mongodb://testnode:tyu10f8x@ds047762.mongolab.com:47762/testnode';
var db  = mongoose.createConnection(url, function(err, res){
    if(err){
        console.log('Error connected: ' + url + ' - ' + err);
    }else{
        console.log('Success connected: ' + url);
    }
});

// Modelの定義
var LabelUtilSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
    label: String
},{collection: 'labelutil'});

exports.LabelUtil = db.model('LabelUtil', LabelUtilSchema);
