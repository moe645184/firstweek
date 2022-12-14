/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1669945515380_2515';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.view = {
    mapping: {
      '.pug': 'pug',
    }
  }
  
exports.pug = {}

config.sequelize = {
  dialect: 'mysql',
  database: 'message',
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: 'jeff645184',
  underscored: true,
  timezone: '+08:00',
};

config.security = {
  csrf: {
    enable: false,
  },
};

config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:7001']
};
config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};

  return {
    ...config,
    ...userConfig,
  };
};
