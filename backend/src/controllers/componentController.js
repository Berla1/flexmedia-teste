const Component = require('../models/Component');
const Board = require('../models/Board');


exports.getComponent = async (req, res) => {
  try {
    const components = await Component.find()
      .populate('board', 'name description'); // Popula dados da placa
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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