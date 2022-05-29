'use strict';

/**
 *  router.
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('plugin::crud.entry');

module.exports = {
    //type: 'admin', // other type available: content-api.
    //https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-server-customization-4-6
    //The server part of a plugin is nothing more than an API you can consume from the outside (http://localhost:1337/api/plugin-name/...) or in the admin of your plugin (http://localhost:1337/plugin-name/...). It is made of routes, controllers, and services but also middlewares and policies.
    //content-api: It is external: The routes will be available from this endpoint: /api/plugin-name/.... It needs to be activated in the Users & Permissions plugin setting in the admin.
    //admin: It is internal: The routes will be available from this endpoint: /plugin-name/... and will only be accessible from the front-ent part of Strapi: the admin. No need to define permissions but you can enable or disable authentication.
    routes: [
        {
            method: 'GET',
            path: '/',
            handler: 'entry.index',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'GET',
            path: '/entry/:id',
            handler: 'entry.entry',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/create',
            handler: 'entry.create',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/update/:id',
            handler: 'entry.update',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'DELETE',
            path: '/delete/:id',
            handler: 'entry.delete',
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
};
