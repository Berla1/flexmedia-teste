const express = require("express");
const router = express.Router();
const {
  getAllBoards,
  postBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers/boardController");

router.get("/", getAllBoards);
router.post("/", postBoard);
router.put("/:id", updateBoard);
router.delete("/:id", deleteBoard);

module.exports = router;
