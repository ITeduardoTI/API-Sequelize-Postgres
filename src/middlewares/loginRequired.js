import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ errors: ['Token não informado'] });
  }

  const [, token] = authorization.split(' ');

  const tokenInfo = jwt.verify(token, process.env.TOKEN_SECRET);
  if (!tokenInfo) {
    res.status(401).json({ errors: ['Token inválido'] });
  }
  const { id, email } = tokenInfo;
  req.userId = { id };
  req.userEmail = { email };
  return next();
};
