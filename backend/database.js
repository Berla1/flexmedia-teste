const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout de 5 segundos
    });
    console.log("Banco de dados conectado com sucesso");
    return true;
  } catch (err) {
    console.error("Falha na conexão com MongoDB:", err.message);
    return false;
  }
};

module.exports = connectDB;
