const Service = require('egg').Service;
class UserService extends Service {
    async findUser() {
        return 'indexService';
    }
}

module.exports = UserService;
