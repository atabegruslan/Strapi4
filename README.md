# Strapi 4 CMS

Quickstart: https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html

What's new in v4: https://www.youtube.com/playlist?list=PL7Q0DQYATmvjJyxrLw0xCOKwjv8Bh7yLx

https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html

https://www.youtube.com/c/Strapi

Crash courses
- https://www.youtube.com/watch?v=vcopLqUq594
- https://www.youtube.com/watch?v=HjhK0pzwlbU

Tutorials
- https://www.youtube.com/playlist?list=PL_kVwOdi-YKRS7UopjcRsdmnxkPMnr1qD
- https://www.youtube.com/playlist?list=PL7Q0DQYATmvgTWQH91NhIdY2BFdDYntPP

Structure
- CMS: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/file-structure.html
- Plugin: https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/plugin/update-folder-structure.html#updating-folder-structure-automatically : "Example of a Strapi v4 plugin structure"

## Plugins

- https://docs.strapi.io/developer-docs/latest/development/plugins-development.html
- https://strapi.io/plugin-resources
- https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/admin-panel.html
- https://github.com/PaulBratslavsky/plugin-dev-101-strapi-v4-complete

### Appearing in `/admin`

If you don't want your plugin to appear in the `/admin` left-side-bar, then **don't** record it in `{root}/config/plugin.js`

```js
'someplugin': {
  enabled: true,
  resolve: './src/plugins/someplugin'
},
```

### Constants

![](/Illustrations/constants.PNG)

However that would only make constants available in the `server` folder, not the `admin`.

For `admin` to access those constants, you need to make an API route which code in `admin` can call to retrieve those constants.

More details (other options)

- https://discord.com/channels/811989166782021633/870213780951433217/991674252631756842
  - https://discord.com/channels/811989166782021633/870213780951433217/1003625127512133723
- https://discord.com/channels/811989166782021633/870213780951433217/1003838034413895700

## DB interaction

- https://strapi.io/blog/using-database-transactions-to-write-queries-in-strapi
- Query Engine API: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine-api.html
    - https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/query-engine/bulk-operations.html
    - Entity Service API: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html
        - CRUD: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html
- `strapi.store` https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-in-database

### Store

![](/Illustrations/strapi_core_store_settings_table.PNG)

If you want to read from the table like above, you would write your code like below:

```js
const pluginStore = strapi.store({
  environment: strapi.config.environment,
  type: 'plugin',
  name: 'users-permissions',
});

await pluginStore.get({ key: 'grant' });
```

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

### Get admin user's token

```js
import { auth, request } from '@strapi/helper-plugin';

function Xxx() {

  useEffect(() => {
    const currentToken = auth.getToken();
```

`auth.getToken()` also works in Strapi v3.

How the upload plugin uses an Axios-interceptor to shove admin's token into every request: https://github.com/strapi/strapi/blob/main/packages/core/upload/admin/src/utils/axiosInstance.js#L11   
and subsquently `axiosInstance` ( eg: https://github.com/strapi/strapi/blob/main/packages/core/upload/admin/src/hooks/useAssets.js#L44 ) is used instead of the plain `axios`.

## Lang

- https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#getting-localized-entries-with-the-locale-parameter
- https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#extending-translations
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#locale

## Hooks

https://strapi.io/blog/understanding-the-different-types-categories-of-strapi-hooks

## Packages (Providers & Plugins)

- https://github.com/strapi/strapi/tree/master/packages
- https://docs.strapi.io/developer-docs/latest/plugins/plugins-intro.html

### Providers

https://strapi.io/video-library/install-config-email-upload-provider (Using Email and Upload as examples)

### Uploader

- https://docs.strapi.io/developer-docs/latest/plugins/upload.html
- https://www.youtube.com/watch?v=gQD24HJP1mc
- https://www.youtube.com/watch?v=A4VZyo6BrJA&t=660s

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

### Allowing remote images to show

https://github.com/strapi/strapi/issues/11637#issuecomment-977244572

### CORS

Question: Is it possible to use this request helper ( `import { request } from "@strapi/helper-plugin";` ) to call an API of another domain? When I tried it, it kept showing me a CORS error.

Solution: https://stackoverflow.com/questions/71382302/setting-cors-in-strapi-4/71555786#71555786

PS: CORS affects `@strapi/helper-plugin`'s helper, but not JS's `fetch`

## HTTP

- https://www.npmjs.com/package/@strapi/helper-plugin

Example

```js
import React, { memo, useEffect, useState } from 'react';
import pluginId from '../../pluginId';
import $ from 'jquery';
import { request } from "@strapi/helper-plugin";

const HomePage = () => {
  const [config, setConfig] = useState({
    aaa: '',
    bbb: ''
  });

  useEffect(() => {
    request("{ENDPOINT}", {method: 'GET', headers:{"HEADERNAME":"HEADERVALUE"}}).then(setConfig);
  }, []);

  // ...

  await request("{ENDPOINT}", {method: 'PUT', body: config});
```

- https://discord.com/channels/811989166782021633/841755530007805983/982103729186693160
- https://github.com/strapi/strapi/blob/master/packages/core/helper-plugin/lib/src/utils/request/index.js

## Configs

### Env file

`.env`
```
HOST=0.0.0.0
PORT=1337
```

### CMS config file

`config/server.js`
```js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
});
```

`strapi.config.get('server.host', 'defaultValueIfUndefined');`

https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html

### Plugin config file

https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/server.html#configuration

## Customize plugin logo

### The logo on the left side menu

`src/plugins/someplugin/admin/src/index.js`
```js
import PluginIcon from './components/PluginIcon';

const name = "someplugin";

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
```

`src/plugins/someplugin/admin/src/components/PluginIcon/index.js`
```js
import React from 'react';

const PluginIcon = () => <img src="https://{WHATEVER}.png" width="16" height="16" />;

export default PluginIcon;
```

### The logo beside the title

`src/plugins/someplugin/admin/src/pages/HomePage/index.js`
```js
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../theme/index.css';

const HomePage = () => {

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="pluginHeading">
            <img src="https://{WHATEVER}.png" />
            <h1>Plugin Title</h1>
          </div>
```

`src/plugins/someplugin/admin/src/theme/index.css`
```
.pluginHeading {
    margin: 10px;
}
.pluginHeading img {
    margin-right: 10px;
}
.pluginHeading h1, .pluginHeading img {
    display: inline-block;
    vertical-align: middle;
}
```

## Install and Run

node v14.0.0
npm v6.14.4

`yarn create strapi-app plugin-name`,  
Chose quickstart.   

Refs:
- https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project
- https://www.codegrepper.com/code-examples/shell/how+to+install+latest+version+of+strapi

After you install and run for the first time, you will be prompted to make a superadmin account.

`npm run strapi generate`,  
Chose plugin,  
Name it.  

`yarn build`

Run: `yarn start`

Hot reload: `yarn develop`

Hot reload (Backend included): `yarn develop --watch-admin`

## Lifecycle

![](/Illustrations/lifecycle.PNG)

## Other CLI commands

- `yarn strapi generate content-type`
- `yarn strapi generate:plugin import-content`
- `yarn strapi generate:model importconfig --plugin import-content`
- List all routes: `yarn strapi routes:list`
- Create content of type
  ```
  Request URL: http://localhost:1337/content-manager/collection-types/api::restaurant.restaurant
  Request Method: POST
  ---
  Name: "Bbb"
  Value: "Restaurant2"
  ```

## REST API

Permissions: Create an user, give it Authenticated role. Settings > Roles > Authenticated user role > Give permissions

Auth: 

```
curl --location --request POST '{domain}/api/auth/local' 
--form 'identifier="user@auth.com"' 
--form 'password="auth_user_password"'
```
https://www.youtube.com/watch?v=TIK9CYDgs5k&list=PL2dKqfImstaROBMu304aaEfIVTGodkdHh&index=3 (v3, but still applicable to v4)

GET all media: 

```
curl --location --request GET '{domain}/api/upload/files' \
--header 'Authorization: Bearer {token}'
```
https://docs.strapi.io/developer-docs/latest/plugins/upload.html#endpoints

GET all contents of custom content-type: 

```
curl --location --request GET '{domain}/api/tests' \
--header 'Authorization: Bearer {token}'
```
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
- https://strapi.io/blog/how-to-create-a-custom-api-endpoint-in-strapi

Note: If your `content-type` contains Media fields, then you have to append this query parameter for media info to show `?populate=%2A`

- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#population
- https://discord.com/channels/811989166782021633/841755530007805983/1006514189935841280

## Publishing to NPMJS

- Providers: The `name` in `package.json` must have this format: `@strapi/provider-upload-{whatever}`
- Can be of any format

## Publishing to Strapi 

- https://market.strapi.io/submit-plugin
- https://market.strapi.io/submit-provider
- https://discord.com/channels/811989166782021633/942840578582913025/1027133217981079602
- https://strapi.io/marketplace/guidelines

## Ref

https://github.com/strapi/strapi/releases

https://discord.com/invite/strapi

## Good plugins & plugins for imitation/reference

- https://github.com/nicolashmln/strapi-plugin-responsive-image
- https://github.com/MattieBelt/strapi-hook-algolia (For understanding hooks)
- https://github.com/shorwood/strapi-provider-upload-do

## My personal projects and notes

- CRUD: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/crud
- CRUD: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/todo (Not yet finished)
- CRUD: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/pets (Not yet finished)
- SEO: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/seo (Not yet finished)
- CSS: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/css (Not yet finished)
- Language Strings: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/language-strings
- Auth & Upload: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/auth-and-upload
- Social Share Button: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/social-share (Not yet finished)
- WYSIWYG: https://github.com/atabegruslan/Strapi4/tree/master/src/plugins/wysiwyg (Not yet finished)
- Upload provider: https://github.com/atabegruslan/Strapi4/tree/master/providers/%40strapi/provider-upload-custom (Not fully done, just a demo of concept)

---

# To Read

- https://forum.strapi.io/t/how-to-add-a-new-provider-in-users-permissions-plugin-in-strapi-v4/14165/2
