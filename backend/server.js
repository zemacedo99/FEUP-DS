import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import patternRoute from './routes/patlet';
import searchRoute from './routes/search';

require('dotenv').config();

const port = process.env.PORT || 3000;

function createServer() {
  const app = express();

  app.use(logger('dev'));
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());

  /**
     * Route importing and declaration
     *
     * - import route from routes directory
     * - declare the route
     */

  app.use('/patterns', patternRoute);
  app.use('/patlets', patternRoute);

  app.use('/search', searchRoute);
  return app.listen(port);
}

export default createServer;
