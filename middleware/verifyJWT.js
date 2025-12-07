const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized: No token provided",
      status: "error",
      code: 401,
      data: null,
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          message: "Forbidden: Invalid token",
          status: "error",
          code: 403,
          data: null,
        });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(403).json({
      message: "Forbidden: Invalid token",
      status: "error",
      code: 403,
      data: null,
    });
  }
};

module.exports = verifyJWT;
