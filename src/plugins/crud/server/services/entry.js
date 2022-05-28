'use strict';

/**
 *  service.
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('plugin::crud.entry');

// https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html
module.exports = ({ strapi }) => ({
    index(ctx) {
        return strapi.entityService.findMany('plugin::crud.entry', {
            fields: ['name', 'value'],
            populate: { category: true },
        });
    },
    entry(ctx, id) {
        return strapi.entityService.findOne('plugin::crud.entry', id, {
            fields: ['name', 'value'],
            populate: { category: true },
        });
    },
});
