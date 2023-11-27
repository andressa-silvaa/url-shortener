// app.js
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/routes');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');

const app = express();

// Configuração da view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Rotas
app.use('/', indexRouter);

// Middleware para lidar com erros 404
app.use(errorHandlingMiddleware.notFound);

// Middleware para lidar com outros erros
app.use(errorHandlingMiddleware.otherErrors);
module.exports = app;
