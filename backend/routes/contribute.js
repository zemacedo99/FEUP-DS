const express = require('express');
const controller = require('../controllers/contribute');

const router = express.Router();

router.post('/', controller.requestContribute);

module.exports = router;
