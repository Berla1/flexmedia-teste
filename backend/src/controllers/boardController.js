const Board = require("../models/Board");

// GET de board
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find().populate("components");
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST de board
exports.postBoard = async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT de board
exports.updateBoard = async (req, res) => {
  try {
    const updatedBoard = await Board.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBoard) {
      return res.status(404).json({ error: "Placa não encontrada" });
    }
    res.json(updatedBoard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE de board
exports.deleteBoard = async (req, res) => {
  try {
    const deletedBoard = await Board.findByIdAndDelete(req.params.id);
    if (!deletedBoard) {
      return res.status(404).json({ error: "Placa não encontrada" });
    }
    res.json({
      success: true,
      message: "Placa deletada com sucesso",
    });

  } catch (err) {
    res.status(500).json({
      error: "Erro ao deletar placa",
      details: err.message,
    });
  }
};
