const express = require('express');

const router = express.Router();

const controller = require('../controllers/patlet');

router.get('/', controller.getAllPatlets);

module.exports = router;
