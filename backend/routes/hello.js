const express = require('express');

const router = express.Router();

const controller = require('../controllers/hello');

router.get('/hello', controller.hello);

module.exports = router;
