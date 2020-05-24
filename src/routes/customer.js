const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.list);
router.post('/add', controller.save);
router.post('/delete', controller.delete);

module.exports = router;