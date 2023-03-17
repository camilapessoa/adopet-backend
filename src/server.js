/* eslint-disable import/extensions */
import express from 'express';
import database from './config/database.js';

const app = express();
const PORT = 3333;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  database.authenticate()

    .then(() => {
      console.log('Conectado ao banco de dados com sucesso!');
    })

    .catch((err) => {
      console.error('Erro ao conectar ao banco de dados:', err);
    });

  console.log(`Server is running on port ${PORT}`);
});
