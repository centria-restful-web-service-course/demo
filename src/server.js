const express = require('express');
const appointmentRoutes = require('./routes/appointment');
const { notFound, errorHandler } = require('./middlewares/error');

const app = express();

// Load middleware

app.use('/api/appointment', appointmentRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
