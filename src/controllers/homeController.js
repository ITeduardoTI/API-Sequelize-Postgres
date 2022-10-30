import Aluno from '../models/Aluno.js';

/**
 * O padrão a ser seguido na inserção de
 * dados no banco de dados é o mesmo
 * somente haverá alteração em:
 * <Nome>.create(
 *  {
 *    alterável
 *  }
 * )
 */

class HomeController {
  index(req, res) {
    res.json('index');
  }
}

export default new HomeController();
