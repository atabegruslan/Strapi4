'use strict';

/**
 *   controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('plugin::crud.entry');

// https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html
module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('crud')
      .service('entry')
      .index(ctx);
  },
  entry(ctx) {
    const { id } = ctx.params;
    // const { query } = ctx; // eg: ?a=b becomes {"a":"b"}

    ctx.body = strapi
      .plugin('crud')
      .service('entry')
      .entry(ctx, id);
  },
  create(ctx) {
    ctx.body = ctx.request.body;

    // ctx.body = strapi
    //   .plugin('crud')
    //   .service('entry')
    //   .create(ctx);
  },
};
