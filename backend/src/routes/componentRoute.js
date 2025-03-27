const express = require('express');
const router = express.Router();
const { createComponent } = require('../controllers/componentController');

router.post('/', createComponent);

module.exports = router;