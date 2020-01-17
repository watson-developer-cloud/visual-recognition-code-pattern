module.exports = app => {
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.title = 'Page not found';
    err.description = `The page ${req.path} was not found.`;
    err.statusCode = 404;
    next(err);
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const error = {
      title: err.title || 'Internal Server Error',
      description: err.description || err.error || err.message,
    };
    res.status(err.statusCode || 500).json({ error });
  });
};