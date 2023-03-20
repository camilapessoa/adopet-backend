/* eslint-disable import/extensions */
import express from 'express';
import TutorController from './controllers/TutorController.js';

const routes = express.Router();

routes.post('/tutor', TutorController.criaTutor);
routes.get('/tutor', TutorController.mostraTutores);

export default routes;
