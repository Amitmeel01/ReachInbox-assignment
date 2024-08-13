import jwt from 'jsonwebtoken'

function verifyAccessToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Unauthorized: Invalid token");
    }

    req.user = user;
    next();
  });
}

export default verifyAccessToken;
