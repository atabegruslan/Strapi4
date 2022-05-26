'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('social-share')
      .service('myService')
      .getWelcomeMessage();
  },
};
