const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res
      .status(401)
      .send({
        authorized: false,
        message: "Access denied. No token provided.",
      });
  }

  const token = req.headers.authorization.split(" ")[1];

  // console.log(req.headers.authorization)
  if (token) {
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decodedToken) => {
      if (err) {
        // console.log(err.message);
        res
          .status(401)
          .send({
            authorized: false,
            message: "Access denied. No token provided.",
          });
      }
      req.user = decodedToken.id;
      console.log(decodedToken.id);
      next();
    });
  } else {
    // console.log('token upset')
    res.status(401).send({ authorized: false, message: "Invalid token." });
  }
};

module.exports = { auth };
