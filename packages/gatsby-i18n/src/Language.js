import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { I18nConsumer } from './I18nContext';
import { resolveLocalizedPath } from './utils';

class Language extends Component {
  handleChangeLng = newLng => {
    const { originalPath, localizedPaths } = this.props;
    const resolvePath = resolveLocalizedPath(localizedPaths, originalPath);

    //const newUrl = withPrefix(`/${newLng}${originalPath}`);
    const newUrl = `/${newLng}${resolvePath(newLng)}`;
    navigate(newUrl);
  };

  render() {
    const { availableLngs, children, lng } = this.props;
    return children({ lng, changeLng: this.handleChangeLng, availableLngs });
  }
}

export default props => (
  <I18nConsumer>
    {lngProps => <Language {...lngProps} {...props} />}
  </I18nConsumer>
);
