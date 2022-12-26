'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('message', '/message', controller.messages);
  router.post('/edit/:id', controller.messages.renew);
};
