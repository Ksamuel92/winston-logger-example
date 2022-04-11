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
      webhookUrl: 'YOUR_SLACK_WEBHOOK',
      username: 'MY APP'
    }
  }
]


module.exports = create(loggerTransports)