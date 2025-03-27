const express = require('express');
const router = express.Router();
const { postComponent, getComponent } = require('../controllers/componentController');

router.get('/', getComponent)
router.post('/', postComponent);

module.exports = router;