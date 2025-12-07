module.exports = (isAllowed) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!isAllowed.includes(userRole)) {
      return res.status(403).json({
        message: "Forbidden: You don't have permission to access this resource",
        status: "error",
        code: 403,
        data: null,
      });
    }
    next();
  };
};
