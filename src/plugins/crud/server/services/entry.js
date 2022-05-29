'use strict';

/**
 *  service.
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('plugin::crud.entry');

// https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html
module.exports = ({ strapi }) => ({
    async index(ctx) {
        return await strapi.entityService.findMany('plugin::crud.entry', {
            fields: ['name', 'value'],
            populate: { category: true },
        });
    },
    async entry(ctx, id) {
        return await strapi.entityService.findOne('plugin::crud.entry', id, {
            fields: ['name', 'value'],
            populate: { category: true },
        });
    },
    async create(ctx, payload) {
        console.dir(payload);
        
        return await strapi.entityService.create('plugin::crud.entry', {
            data: payload,
        });
    },
    async update(ctx, id, payload) {
        console.dir(payload);
        
        return await strapi.entityService.update('plugin::crud.entry', id, {
            data: payload,
        });
    },
    async delete(ctx, id) {        
        return await strapi.entityService.delete('plugin::crud.entry', id);
    },
});
