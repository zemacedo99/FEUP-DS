const express = require('express');

const router = express.Router();

const controller = require('../controllers/patlet');

router.get('/', controller.getAllPatlets);

router.get('/:id', controller.getPatlet);

router.post('/:id/review', controller.addReview)

module.exports = router;
