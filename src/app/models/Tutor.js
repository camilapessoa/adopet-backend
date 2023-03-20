import { Sequelize, DataTypes, Model } from 'sequelize';

const {
  DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

export default class Tutor extends Model { }

Tutor.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  sobre: {
    type: DataTypes.STRING,
  },
  imagem: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Tutor',
});

console.log(Tutor === sequelize.models.Tutor); // true
