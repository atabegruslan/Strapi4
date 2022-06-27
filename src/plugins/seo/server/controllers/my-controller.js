'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('seo')
      .service('myService')
      .getWelcomeMessage();
  },
};
