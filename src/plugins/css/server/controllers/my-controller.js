'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('css')
      .service('myService')
      .getWelcomeMessage();
  },
};
