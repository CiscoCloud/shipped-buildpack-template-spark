import 'babel-polyfill';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import livereload from 'connect-livereload';

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let app = express();

// Insert LiveReload snippet when in development mode only
if(env === 'development') {
  console.log('App running in development environment');
  app.use(livereload({port: 35729}));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

import routes from './routes/index';
app.use('/', routes);
app.set('port', 3000);

export default app;
