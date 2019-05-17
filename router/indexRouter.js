const express = require('express');

const router = express.Router();

const controller = require('../controller/controller');

router
    .post('/setKey', controller.setKey)
    .get('/getHash', controller.getKey);

module.exports = router;