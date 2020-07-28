const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.cli(),
  transports: [
    new winston.transports.Console({
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
});
module.exports = logger;
