- https://docs.strapi.io/developer-docs/latest/plugins/upload.html
- https://oramind.com/develop-strapi-upload-provider/
- https://github.com/strapi/strapi/blob/master/packages/providers/upload-local/lib/index.js
- https://www.stefanjudis.com/today-i-learned/npm-install-supports-local-packages/


## Useful commands

`npm i -S ./providers/@strapi/provider-upload-custom`

# Potential problems you may come across

- https://stackoverflow.com/questions/57186018/referenceerror-headers-is-not-defined-when-using-headers-in-a-server-side-ren
- https://stackoverflow.com/questions/62119144/firebase-login-assertion-failed-new-time-loop-time-file-c-ws-deps-uv-src
- It only works properly on Linux. On Windows - bug `Error: EPERM: operation not permitted, lstat 'C:/Users/%20/AppData/Local/Temp/strapi-upload- ... '`. But if one can learn how to upload via pipes are streams (like in this Cloudinary example: https://github.com/strapi/strapi/blob/master/packages/providers/upload-cloudinary/lib/index.js#L56), then this bug can be avoided.
	- ie: learn how to upload as stream to post request
		- https://www.geeksforgeeks.org/node-js-stream-pipeline-method/amp/
		- https://stackoverflow.com/questions/58875655/whats-the-difference-between-pipe-and-pipeline-on-streams
		- https://www.mariokandut.com/how-to-connect-streams-with-pipeline-in-node-js/
		- https://www.guru99.com/node-js-streams-filestream-pipes.html
		- https://dev.to/tqbit/how-to-use-node-js-streams-for-fileupload-4m1n
		- https://stackoverflow.com/questions/37336050/pipe-a-stream-to-s3-upload
		- https://github.com/strapi/strapi/blob/master/packages/providers/upload-local/lib/index.js#L37-L39
		- https://github.com/strapi/strapi/blob/master/packages/providers/upload-cloudinary/lib/index.js#L27
			- https://www.npmjs.com/package/@strapi/provider-upload-cloudinary
