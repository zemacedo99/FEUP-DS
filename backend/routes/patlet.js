const express = require('express');
const controller = require('../controllers/patlet');

const router = express.Router();

router.get('/', controller.getAllPatlets);

router.get('/:id', controller.getPatlet);

router.post('/:id/review', controller.addReview);

module.exports = router;
