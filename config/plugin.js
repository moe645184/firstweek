'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  pug : {
    enable: true,
    package: 'egg-view-pug'
  },
  sequelize : {
    enable: true,
    package: 'egg-sequelize'
  },
  cors : {
    enable: true,
    package: 'egg-cors',
  }
};
