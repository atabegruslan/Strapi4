# Strapi plugin Auth & Upload

## Auth

- https://docs.strapi.io/developer-docs/latest/guides/auth-request.html
- Strapi v4, for authenticate user route should be `/api/auth/local`, not `/auth/local` https://getridbug.com/node-js/strapi-register-method-not-allowed-405-in-v4-seems-url-is-incorrect/
- https://www.youtube.com/watch?v=N4JpylgjRK0&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn&index=4
- https://strapi.io/blog/a-beginners-guide-to-authentication-and-authorization-in-strapi
- https://docs.strapi.io/developer-docs/latest/guides/jwt-validation.html#customize-the-jwt-validation-function

```js
var formdata = new FormData();
formdata.append("identifier", '{AUTH_USER_EMAIL}');
formdata.append("password", '{AUTH_USER_PASS}');

var requestOptions = {
  method: 'POST',
  body: formdata
};

var authResponse = await fetch(`${strapi.backendURL}/api/auth/local`, requestOptions);

if (authResponse.status != 200)
{
  return;
}

var authData = await authResponse.json();

if (authData.hasOwnProperty('error'))
{
  return;
}
```

### Other semi-relevant stuff

- Making protected routes: https://strapi.io/blog/protected-routes-and-authentication-with-react-and-node-js
- In route -> controller, `ctx.state.user` would only be something is its an auth'ed route https://discord.com/channels/811989166782021633/841755530007805983/988815887882653736

## Upload

- https://docs.strapi.io/developer-docs/latest/plugins/upload.html#endpoints
- https://forum.strapi.io/t/upload-image-url/3484/2
- https://dev.to/bassel17/how-to-upload-an-image-to-strapi-2hhg

```js
var fileResponse = await fetch(url);
var fileBlob = await fileResponse.blob();

var formData = new FormData();
formData.append('files', fileBlob);
formData.append('fileInfo', JSON.stringify({"alternativeText":alt,"caption":"","name":name}));

var uploadResponse = await fetch(`${strapi.backendURL}/api/upload`, { method: 'POST', headers: { "Authorization": `Bearer ${authData.jwt}` }, body: formData });
console.dir(uploadResponse);
```