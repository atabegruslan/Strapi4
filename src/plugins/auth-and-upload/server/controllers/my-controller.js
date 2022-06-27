'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('auth-and-upload')
      .service('myService')
      .getWelcomeMessage();
  },
};
