const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');

require('dotenv').config(); // this needs to be before the next two requires

const patternRoute = require('./routes/patlet');
const searchRoute = require('./routes/search');

const port = process.env.PORT || 3000;

function createServer() {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
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

module.exports = createServer;
