import "babel-polyfill";

import express from 'express';
import path from 'path';
//import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';

import config from './config/application';

import routes from './routes/index';
import users from './routes/users';
import rooms from './routes/rooms';
import memberships from './routes/memberships';
import messages from './routes/messages';
//import webhooks from './routes/webhooks';

const app = express();
app.use(compression());

console.log(app.set);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// static assets
config.staticDirs.forEach((dir) => {
  app.use(express.static(dir));
});

app.use('/', routes);
// app.use('/users', users);
// app.use('/rooms', rooms);
// app.use('/memberships', memberships);
// app.use('/messages', messages);
//app.use('/webhooks', webhooks);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  /* eslint-disable no-unused-vars */
  app.use((err, req, res, next) => {
    /* eslint-enable no-unused-vars */
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  /* eslint-enable no-unused-vars */
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/*app.post('/messages',function(req,res){

});*/


// import assert from 'assert';
// import spark from 'ciscospark';
// assert(process.env.CISCOSPARK_ACCESS_TOKEN);
// (async function() {
//   try {
//     console.log(Object.keys(spark.rooms));
//     let rooms = await spark.rooms.list();
//     console.log(rooms);
//     // let message = await spark.messages.create({
//     //   text: 'Howdy!',
//     //   roomId: room.id
//     // });
//   }
//   catch(error) {
//     console.error(error.stack);
//     process.exit(1);
//   }
// }());

export default app;
