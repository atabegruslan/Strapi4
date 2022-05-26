'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('crud')
      .service('myService')
      .getWelcomeMessage();
  },
};
