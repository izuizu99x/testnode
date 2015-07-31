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
var UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
	uid: String,
    pwd: String,
    email: String,
    emailconf: Boolean,
    emailconfkey: String,
    logintoken: String
},{collection: 'userinfo'});

exports.User = db.model('User', UserSchema);
