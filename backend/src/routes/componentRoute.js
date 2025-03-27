const express = require("express");
const router = express.Router();
const {
  postComponent,
  getComponent,
  updateComponent,
  deleteComponent,
} = require("../controllers/componentController");

router.get("/", getComponent);
router.post("/", postComponent);
router.put("/:id", updateComponent);
router.delete("/:id", deleteComponent);

module.exports = router;
