// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Internal Server Error');
};

module.exports = errorHandler;
