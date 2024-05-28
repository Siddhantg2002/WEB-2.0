const jwt = require("jsonwebtoken");
const secretKey = "Blog secret Key"; 

const decryptJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized: Token is required" }); // Return error response
  }
  const token = authHeader.split(" ")[1]; // Getting the token from the header

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden: Invalid Token" }); // Return error response
    }
    req.user = decoded; 
    next(); 
  });
};

module.exports = decryptJWT;
