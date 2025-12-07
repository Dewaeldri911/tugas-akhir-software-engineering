const jwt = require("jsonwebtoken");

module.exports = function(requiredRole) {
  return function(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Token tidak ada" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ message: "Akses ditolak" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: "Token tidak valid" });
    }
  };
};
