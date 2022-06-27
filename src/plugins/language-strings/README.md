# Strapi plugin language-strings

- https://docs-v3.strapi.io/developer-docs/latest/development/local-plugins-customization.html#i18n
	- `react-intl`
		- https://www.npmjs.com/package/react-intl
		- https://formatjs.io/docs/react-intl/
		- https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl
		- https://github.com/formatjs/formatjs
		- https://lokalise.com/blog/react-i18n-intl/

```js
import { sprintf } from 'sprintf-js';
import { useIntl } from 'react-intl';

const SomeComponent = (props) => {
  const intl = useIntl();

  // {PLUGIN FOLDR}/admin/src/translations/en.json : { "plugin-name.notification.success.lang_str_id": "xxx %1$d yyy %2$d", }
  var resultString = sprintf(intl.formatMessage({id:'language-strings.notification.success.an_identifier'}), 42, 1111);
  alert(resultString);
```
