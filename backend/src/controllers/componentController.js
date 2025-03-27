const Component = require('../models/Component');
const Board = require('../models/Board');


// GET de component
exports.getComponent = async (req, res) => {
  try {
    const components = await Component.find()
      .populate('board', 'name description'); // Popula dados da placa
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST de component
exports.postComponent = async (req, res) => {
  try {
    const component = new Component(req.body);
    await component.save();
    
    if (req.body.board) {
      await Board.findByIdAndUpdate(req.body.board, { 
        $push: { components: component._id } 
      });
    }
    
    res.status(201).json(component);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT de component
exports.updateComponent = async (req, res) => {
  try {
    const updatedComponent = await Component.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedComponent) {
      return res.status(404).json({ error: "Componente não encontrado" });
    }
    res.json(updatedComponent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE de component
exports.deleteComponent = async (req, res) => {
  try {
    const deletedComponent = await Component.findByIdAndDelete(req.params.id);
    if (!deletedComponent) {
      return res.status(404).json({ error: "Componente não encontrado" });
    }
    res.json({
      success: true,
      message: "Componente deletado com sucesso",
    });

  } catch (err) {
    res.status(500).json({
      error: "Erro ao deletar componente",
      details: err.message,
    });
  }
};
