//
// ユーザー機能ルーティング
//
var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');

/* GET users listing. */
router.get('/', controller.getUsers);

/* login. */
router.post('/login', controller.login);

/* sign up. */
router.post('/signup', controller.signup);

module.exports = router;
