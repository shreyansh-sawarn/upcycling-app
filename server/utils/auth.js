// const jwt = require('jsonwebtoken');
// const config = require('../config');
// const User = require('../models/user');

// const generateToken = (user) => {
//   const payload = {
//     userId: user.id,
//     email: user.email,
//     firstName: user.firstName,
//     lastName: user.lastName
//   };

//   return jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });
// };

// const verifyToken = (token) => {
//   try {
//     const payload = jwt.verify(token, config.jwtSecret);
//     return { success: true, payload };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// const authenticateUser = async (email, password) => {
//   const user = await User.findOne({ email });

//   if (!user) {
//     return { success: false, error: 'User not found' };
//   }

//   const isMatch = await user.comparePassword(password);

//   if (!isMatch) {
//     return { success: false, error: 'Invalid password' };
//   }

//   const token = generateToken(user);

//   return { success: true, token };
// };

// const authorizeUser = async (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ success: false, error: 'Unauthorized' });
//   }

//   const { success, payload, error } = verifyToken(token.split(' ')[1]);

//   if (!success) {
//     return res.status(401).json({ success: false, error });
//   }

//   const user = await User.findById(payload.userId);

//   if (!user) {
//     return res.status(401).json({ success: false, error: 'Unauthorized' });
//   }

//   req.user = user;
//   next();
// };

// module.exports = { generateToken, verifyToken, authenticateUser, authorizeUser };


const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

function generateToken(payload) {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiration });
}

async function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error('Invalid token');
    }
    return user;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
