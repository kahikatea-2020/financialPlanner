const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.use('/users', require('./users'));

module.exports = router;