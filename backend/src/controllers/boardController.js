const Board = require("../models/Board");

exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("components");
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postBoard = async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
