'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('language-strings')
      .service('myService')
      .getWelcomeMessage();
  },
};
