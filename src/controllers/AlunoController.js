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

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }

      const alunoRetornado = await Aluno.findByPk(id);

      if (!alunoRetornado) {
        return res.status(400).json({ errors: ['Aluno não foi encontrado'] });
      }

      return res.json(alunoRetornado);
    } catch (e) {
      console.log(e);

      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const infoRetornada = await Aluno.create(req.body);

      return res.json(infoRetornada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ errors: ['ID não informado'] });
      }

      const infoRetornada = await Aluno.findByPk(id);

      if (!infoRetornada) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }

      const infoAlterada = await infoRetornada.update(req.body);

      return res.json(infoAlterada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['ID não informado'] });
      }

      const alunoRetornado = await Aluno.findByPk(id);

      if (!alunoRetornado) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }

      return alunoRetornado;
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
