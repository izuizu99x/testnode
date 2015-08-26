//
// ラベルユーティリティルーティング
//
var express = require('express');
var router = express.Router();
var controller = require('../controllers/labelUtil');

/* GET labelDialog home page. */
router.get('/:id', controller.labelDialog);

/* GET label */
router.get('/data/:id', controller.getLabel);

/* Add/Change Label. */
router.post('/data/:id', controller.registerLabel);

module.exports = router;
