import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await Users.create(req.body);
      res.json(newUser);
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      console.log(req.params.id);
      const users = await Users.findAll();
      return res.json(users);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não informado'],
        });
      }

      const user = await Users.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não informado'],
        });
      }

      const user = await Users.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      if (req.body.email) {
        req.body.email = req.body.email.toLowerCase();
      }

      const editedUser = await user.update(req.body);

      return res.json(editedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não informado'],
        });
      }

      const user = await Users.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
}

export default new UserController();
