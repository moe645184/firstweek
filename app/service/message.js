const { Service } = require('egg');

class MessageService extends Service {
  async toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  }
}

module.exports = MessageService;
