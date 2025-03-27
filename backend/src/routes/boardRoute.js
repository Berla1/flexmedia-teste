const express = require('express');
const router = express.Router();
const { getAllBoards, postBoard } = require('../controllers/boardController');

router.get('/', getAllBoards);
router.post('/', postBoard);

module.exports = router;