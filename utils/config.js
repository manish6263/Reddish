require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.JWT_SECRET;
const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'ml_default';
const NODE_ENV = process.env.NODE_ENV;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
  PORT,
  NODE_ENV,
  MONGODB_URI,
  SECRET,
  cloudinary,
  UPLOAD_PRESET,
};