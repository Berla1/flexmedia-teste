require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco e inicialização
const startServer = async () => {
  const isConnected = await connectDB();
  
  if (!isConnected) {
    console.log('Servidor não iniciado devido a falha no banco');
    process.exit(1);
  }

  // Rotas
  app.use('/api/boards', require('./src/routes/boardRoute'));
  app.use('/api/components', require('./src/routes/componentRoute'));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
};

startServer();