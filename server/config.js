module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/upcycling-app',
  jwtSecret: process.env.JWT_SECRET || 'secretkey',
};
