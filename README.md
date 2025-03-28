# FlexMedia Teste

Este repositório contém um teste técnico realizado para a empresa FlexMedia.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Como Rodar o Projeto

### Clone o repositório:
```bash
git clone https://github.com/Berla1/flexmedia-teste.git
cd flexmedia-teste
```

## Configuração do ambiente
### Crie um ```.env``` na raiz do seu projeto com as seguintes variáveis:
```bash
MONGO_URI=mongodb://seu_usuario:sua_senha@localhost:27017/seu_banco_de_dados
PORT=5000
```
- `MONGO_URI`: substitua seu_usuario, sua_senha e seu_banco_de_dados pelos valores correspondentes ao seu banco MongoDB.
- `PORT`: define a porta onde o servidor Express vai rodar (no caso, 5000).

## Rodando o backend 
```bash
cd backend
npm install
npm run dev
```

## Rodando o frontend
```bash
cd frontend
npm install
npm run dev
```

## Estrutura do projeto 
```bash
flexmedia-teste/
│── backend/            # Código do servidor Node.js
│── frontend/           # Aplicação React
└── README.md           # Documentação do projeto
```


## Funcionalidades
CRUD de Componentes e Placas:
- Criar: Adicionar novos componentes e placas no sistema.
- Deletar: Remover componentes e placas existentes.
- Editar: Modificar as informações de componentes e placas.
- Listar: Exibir todos os componentes e placas cadastrados
✅ Consumo de API REST
✅ Conexão com banco de dados MongoDB
