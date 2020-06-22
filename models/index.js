'use strict';

const mongoose = require('mongoose');
const logger = require('winston');
const config = require('../config/config');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
});

