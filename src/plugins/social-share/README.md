# Strapi plugin Social Share

Notice in `src/plugins/social-share/admin/src/components/TweetButton/index.js`: `const allowedTypes = ['restaurant', 'article'];`.

So this `Tweet Share Button` will appear in a `content-type` with the name `restaurant`

![](/Illustrations/willAppearIn.PNG)

But it won't appear in a `content-type` with the name `something`

![](/Illustrations/wontAppearIn.PNG)

Not yet complete. Stuck at bug in the `Tweet Share Button`'s `onClick` handler: `Uncaught TypeError: Cannot read properties of undefined (reading 'metaTitle')`.
