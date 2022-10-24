import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

/** Cada modelo criado deve ser importado
 * e adicionado dentro do Array.
 */
const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
