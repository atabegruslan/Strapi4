'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('pets')
      .service('myService')
      .getWelcomeMessage();
  },
};
