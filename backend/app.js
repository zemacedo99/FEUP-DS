const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const port = process.env.PORT || 3000;

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

const helloRoute = require('./routes/hello');

app.use('/hello', helloRoute);

const patternRoute = require('./routes/patlet');

app.use('/patterns', patternRoute);
app.use('/patlets', patternRoute);

app.listen(port);
