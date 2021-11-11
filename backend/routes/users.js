const express = require('express');
const router = express.Router();

router.get('/message', function(req, res, next) {
    res.status(200).json("Hello from Backend");
});

module.exports = router;