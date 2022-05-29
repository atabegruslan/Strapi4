'use strict';

/**
 *   controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('plugin::crud.entry');

// https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html
module.exports = {
  async index(ctx) {
    ctx.body = await strapi
      .plugin('crud')
      .service('entry')
      .index(ctx);
  },
  async entry(ctx) {
    const { id } = ctx.params;
    // const { query } = ctx; // eg: ?a=b becomes {"a":"b"}

    ctx.body = await strapi
      .plugin('crud')
      .service('entry')
      .entry(ctx, id);
  },
  async create(ctx) {
    ctx.body = await strapi
      .plugin('crud')
      .service('entry')
      .create(ctx, ctx.request.body);
  },
  async update(ctx) {
    const { id } = ctx.params;

    ctx.body = await strapi
      .plugin('crud')
      .service('entry')
      .update(ctx, id, ctx.request.body);
  },
  async delete(ctx) {
    const { id } = ctx.params;

    ctx.body = await strapi
      .plugin('crud')
      .service('entry')
      .delete(ctx, id);
  },
};
