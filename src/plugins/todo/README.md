# Strapi4 plugin todo

- https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-generate-a-plugin-1-6
- https://www.youtube.com/playlist?list=PL7Q0DQYATmvjd5D57P8CN0_xp_HsRd3wn

## Frontend Resources and Help

### Documentations

- https://design-system.strapi.io/
	- https://design-system.strapi.io/components
		- https://design-system-git-main-strapijs.vercel.app/?path=/story/design-system-components-theme--icons
		- https://storybook.js.org/docs/react/get-started/introduction
	- https://strapi.io/blog/introducing-strapi-ui-kit

### Basic Usage

```
import { Typography } from '@strapi/design-system';

const Whatever = () => {

  return (
    <>
    	<Typography>Bla bla ...</Typography>
    </>
  )
};

export default Whatever;

```

Note: do NOT write the `@strapi/design-system` dependency into the `package.json`. It may cause errors upon build. Instead, just write:

```
"peerDependencies": {
	"@strapi/strapi": "^4.3.0"
},
``` 

---

Not yet complete. Still on 4/6. Stuck on controller, services, CRUD
