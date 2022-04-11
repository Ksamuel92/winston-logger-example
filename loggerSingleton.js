const create = require('../factories/loggerFactory')

const loggerTransports = [
  {
    type: 'console',
    options: {}
  },
  {
    type: 'file-rotate',
    options: {
      filename: 'filename.log',
      dirname: './logs'
    }
  },
  {
    type: 'slack',
    options: {
      webhookUrl: 'https://hooks.slack.com/services/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',
      username: 'MY APP'
    }
  }
]


module.exports = create(loggerTransports)