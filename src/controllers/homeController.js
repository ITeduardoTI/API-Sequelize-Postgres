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
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      email: req.body.email,
      idade: req.body.idade,
      peso: req.body.peso,
      altura: req.body.altura,
    });
    /** Retorna para o usuário informações do usuário
     * criado
     */
    res.json(novoAluno);
  }
}

export default new HomeController();
