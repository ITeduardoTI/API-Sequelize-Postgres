import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        res.status(400).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const { id } = user;

      if (!(await user.passwordIsValid(password))) {
        res.status(401).json({
          errors: ['Não autorizado'],
        });
      }

      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new TokenController();
