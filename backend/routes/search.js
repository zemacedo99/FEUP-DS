const express = require('express');
const controller = require('../controllers/search');

const router = express.Router();

router.get('/', controller.searchPatlet);

module.exports = router;
