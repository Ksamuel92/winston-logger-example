const winston = require('winston');
const WinstonSlackTransport = require('winston-slack-webhook-transport');
const WinstonRotate = require('winston-daily-rotate-file');

function createConsoleTransport(options) {
  const Console = winston.transports.Console;
  return new Console(options);
}

function createFileRotateTransport(options) {
  return new WinstonRotate(options);
}

function createSlackTransport(options) {
  return new WinstonSlackTransport(options);
}

function getLoggerTransports(transports) {
  return transports.map(transport => {
    const {type, options} = transport;

    switch (type) {
      case 'console':
        return createConsoleTransport(options);
      case 'file-rotate':
        return createFileRotateTransport(options);
      case 'slack':
        return createSlackTransport(options);
    }
  })
}

module.exports = function create(transports) {
  return winston.createLogger({
    transports: getLoggerTransports(transports)
  })
}