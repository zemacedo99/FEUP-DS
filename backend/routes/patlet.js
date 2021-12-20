const express = require('express');

const router = express.Router();

const controller = require('../controllers/patlet');

router.get('/', controller.getAllPatlets);

router.get('/:id', controller.getPatlet);

module.exports = router;
