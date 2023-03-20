/* eslint-disable import/extensions */
import Tutor from '../models/Tutor.js';

export default class TutorController {
  static async criaTutor(req, res) {
    const {
      nome, email, endereco, senha,
    } = req.body;
    const tutor = await Tutor.create({
      nome, email, endereco, senha,
    });
    return res.json(tutor);
  }

  static async mostraTutores(_, res) {
    const tutores = await Tutor.findAll();
    return res.json(tutores);
  }
}
