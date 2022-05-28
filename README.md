# Strapi 4 CMS

Quickstart: https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html

What's new in v4: https://www.youtube.com/playlist?list=PL7Q0DQYATmvjJyxrLw0xCOKwjv8Bh7yLx

https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html

https://www.youtube.com/c/Strapi

Crash courses
- https://www.youtube.com/watch?v=vcopLqUq594
- https://www.youtube.com/watch?v=HjhK0pzwlbU

Structure
- CMS: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/file-structure.html
- Plugin: https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/update-folder-structure.html#updating-folder-structure-automatically : "Example of a Strapi v4 plugin structure"

## Plugins

- https://docs.strapi.io/developer-docs/latest/development/plugins-development.html
- https://strapi.io/plugin-resources
- https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/admin-panel.html

## DB interaction

- https://strapi.io/blog/using-database-transactions-to-write-queries-in-strapi
- Query Engine API: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine-api.html
    - Entity Service API: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html
        - CRUD: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html

`strapi.store` has 3 async functions available for me to use in order to play with the application store. 
```
[Function: store] {
  get: [AsyncFunction: get],
  set: [AsyncFunction: set],
  delete: [AsyncFunction: delete]
}
```
A **global Strapi API reference** https://docs-v3.strapi.io/developer-docs/latest/developer-resources/global-strapi/api-reference.html existed for Strapi v3. It is outdated but some references are still working on v4.

## Controllers

https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html

## Auth

- https://www.youtube.com/watch?v=TIK9CYDgs5k&list=PL2dKqfImstaROBMu304aaEfIVTGodkdHh&index=3 (v3, but still applicable to v4)
- https://www.youtube.com/watch?v=EjBpJuqqi3U (v3, but still applicable to v4)
- https://www.youtube.com/watch?v=xv5TWP3tCKs (v3, but still applicable to v4)
- https://forum.strapi.io/t/retrieve-user-details/5082/2 (v3, but still applicable to v4)
- https://strapi.io/blog/a-beginners-guide-to-authentication-and-authorization-in-strapi (v4, but relatable to v3)
	- https://www.youtube.com/watch?v=vcopLqUq594&t=4336s

## Lang

- https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#getting-localized-entries-with-the-locale-parameter
- https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#extending-translations
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#locale

## Packages (Providers & Plugins)

- https://github.com/strapi/strapi/tree/master/packages
- https://docs.strapi.io/developer-docs/latest/plugins/plugins-intro.html

### Uploader

- https://docs.strapi.io/developer-docs/latest/plugins/upload.html
- https://www.youtube.com/watch?v=gQD24HJP1mc
- https://www.youtube.com/watch?v=A4VZyo6BrJA&t=660s

## Providers

https://strapi.io/video-library/install-config-email-upload-provider (Using Email and Upload as examples)

### Social SignIns

- Login providers: https://strapi.io/video-library/how-login-provider-process-works
    - Google: https://www.youtube.com/watch?v=vGtVSwpOlsM (v3, but still applicable for v4)
    - FB: https://strapi.io/blog/learning-strapi-authentication-flows-facebook-provider
    - Github and FB: https://strapi.io/blog/social-authentication-with-strapi-and-nuxt-js-adding-social-providers
    - Auth0: https://strapi.io/blog/auth0-provider-and-strapi-tutorial

### Other providers

- Email and Upload: https://www.youtube.com/watch?v=1fhFgbR0f3I
- Cloudinary: https://www.npmjs.com/package/@strapi/provider-upload-cloudinary

## Extensions

- https://www.youtube.com/watch?v=zuJPTIEYbXk (v3, but still good for ref)
- https://docs.strapi.io/developer-docs/latest/development/plugins-extension.html#extending-a-plugin-s-content-types

## Middleware

https://docs.strapi.io/developer-docs/latest/development/backend-customization/middlewares.html

## Install and Run

node v14.0.0
npm v6.14.4

`yarn create strapi-app plugin-name`,  
Chose quickstart.   

After you install and run for the first time, you will be prompted to make a superadmin account.

`npm run strapi generate`,  
Chose plugin,  
Name it.  

`yarn strapi build`

`yarn develop`

Hot reload: `yarn develop --watch-admin`

## Ref

https://github.com/strapi/strapi/releases

https://discord.com/invite/strapi

## Good plugins for imitation/reference

- https://github.com/nicolashmln/strapi-plugin-responsive-image
