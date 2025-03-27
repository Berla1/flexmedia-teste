const mongoose = require("mongoose");

const Board = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    enum: [
      "NanoBoard X1",
      "FlexControl 2000",
      "IoT Core V3",
      "SmartShield Alpha",
      "MegaCircuit Z",
      "PowerNode X",
      "SensorLink Pro",
      "AutoTech Board",
      "EdgeCompute Y",
      "EmbeddedX",
    ],
  },
  description: String,
  createdAt: { type: Date, default: Date.now },
  components: [{ type: mongoose.Schema.Types.ObjectId, ref: "Component" }],
});

module.exports = mongoose.model("Board", Board);
