import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withPrefix, navigate } from 'gatsby';
import { lookup, navigatorLanguages } from '@wapps/langtag-utils';

import { isBrowser } from './utils';

class Redirect extends PureComponent {
  componentDidMount() {
    if (!isBrowser()) this.perform();
  }

  perform = () => {
    const { fallbackLng, availableLngs, redirectPage } = this.props.pageContext;

    const detectedLng =
      window.localStorage.getItem('@wappsLng') ||
      lookup(availableLngs, navigatorLanguages(), fallbackLng);

    const newUrl = withPrefix(`/${detectedLng}${redirectPage}`);

    window.localStorage.setItem('@wappsLng', detectedLng);

    navigate(newUrl, { replace: true });
  };

  render() {
    return null;
  }
}

export default Redirect;