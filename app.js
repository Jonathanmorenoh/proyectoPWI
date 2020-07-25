var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Aqui estoy requiriendo dotenv
const dotenv = require('dotenv');
dotenv.config();
//dotenv siempre arriba de las routes

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const contactRouter = require('./routes/contact');
const productosRouter = require('./routes/productos');
const adminUsuariosRouter = require('./routes/admin/usuarios');
const adminProductosRouter = require('./routes/admin/productos');
const carritoRouter = require('./routes/carrito');
const session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '1234',
  resave: true,
  saveUninitialized: true,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/contact',contactRouter);
app.use('/productos',productosRouter);
app.use('/carrito',carritoRouter);
//rutas admin
app.use('/admin/usuarios', adminUsuariosRouter);
app.use('/admin/productos',adminProductosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
