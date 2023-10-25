//const sendEmail = require('../utils/sendEmail');
const AppError = require('./../utils/appError');
require("dotenv").config();
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const sendErrorDev = (err, req, res) => {
  // A) API
  // if (req.originalUrl.startsWith('/api')) {
  //   return res.status(err.statusCode).send({
  //     status: err.status,
  //     error: err,
  //     message: err.message,
  //     stack: err.stack
  //   });
  // }

  // // B) RENDERED WEBSITE
  // console.error('ERROR 💥', err);
  // return res.status(err.statusCode).render('error', {
  //   title: 'Something went wrong!',
  //   msg: err.message
  // });
  return res.status(err.statusCode).send({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, req, res) => {

    // A) Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).send({
        status: err.status,
        message: err.message
      });
    }
    // B) Programming or other unknown error: don't leak error details
    // 1) Log error
    console.error('ERROR 💥', err);
    // 2) Send generic message
    return res.status(500).send({
      status: 'error',
      message: 'Something went very wrong!'
    });
  

  
};

module.exports = (err, req, res, next) => {
  // //console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
let Debug=process.env.NODE_ENV !=="production"
  if (Debug) {
    sendErrorDev(err, req, res);
  } else{
    let error = { ...err };
    //sendEmail("gilljee813@gmail.com","BioPet Backend",err)
    error.message = err.message;

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
};
