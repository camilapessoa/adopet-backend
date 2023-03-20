/* eslint-disable import/extensions */
import express from 'express';
import database from './config/database.js';
import routes from './app/routes.js';

const app = express();
app.use(routes);

const PORT = 8000;

app.get('/', (_, res) => {
  res.send('Olá mundo!');
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
