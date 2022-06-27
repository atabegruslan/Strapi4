/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { sprintf } from 'sprintf-js';
import { useIntl } from 'react-intl';

const HomePage = () => {
  const intl = useIntl();

  var demoPluginsName = sprintf(intl.formatMessage({id:'language-strings.notification.success.an_identifier'}), 42, 1111);

  return (
    <div>
      <h1>Language Strings Plugin</h1>
      <p>{demoPluginsName}</p>
    </div>
  );
};

export default memo(HomePage);
