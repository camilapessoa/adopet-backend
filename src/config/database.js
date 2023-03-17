// eslint-disable-next-line import/no-extraneous-dependencies
import { Sequelize } from 'sequelize';

const {
  DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD,
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

export default sequelize;
