const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
    next();
  };
  
  module.exports = authenticate;
  