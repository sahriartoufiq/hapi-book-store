'use strict';

const winston = require('winston');
const {format} = require('logform');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: '/home/sahriar/winLog.log'})
    ],
    exceptionHandlers: [
        new winston.transports.File({filename: '/home/sahriar/exceptions.log'})
    ]
});
const alignedWithColorsAndTime = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

logger.exitOnError = false;
logger.format = alignedWithColorsAndTime;

module.exports = logger;