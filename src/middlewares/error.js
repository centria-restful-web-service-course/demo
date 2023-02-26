/* eslint-disable no-unused-vars */
function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found', req.originalUrl);
  next(error);
}

function errorHandler(err, _req, res, _next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
