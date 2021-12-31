const express = require('express');

const router = express.Router();

const controller = require('../controllers/search');

router.get('/:query', controller.searchPatlets);

module.exports = router;
