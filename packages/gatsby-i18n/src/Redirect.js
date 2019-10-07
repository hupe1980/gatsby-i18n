import { PureComponent } from 'react';
import { navigate } from 'gatsby';
import { lookup, navigatorLanguages } from 'langtag-utils';

import { isBrowser } from './utils';
import { resolveLocalizedPath } from './utils';

class Redirect extends PureComponent {
  componentDidMount() {
    if (!isBrowser()) this.perform();
  }

  perform = () => {
    const { fallbackLng, availableLngs, redirectPage, localizedPaths } = this.props.pageContext;
    const resolvePath = resolveLocalizedPath(localizedPaths, redirectPage);

    const detectedLng =
      window.localStorage.getItem('@wappsLng') ||
      lookup(availableLngs, navigatorLanguages(), fallbackLng);

    window.localStorage.setItem('@wappsLng', detectedLng);

    //const newUrl = withPrefix(`/${detectedLng}${redirectPage}`);
    const newUrl = `/${detectedLng}${resolvePath(detectedLng)}`;
    navigate(newUrl, { replace: true });
  };

  render() {
    return null;
  }
}

export default Redirect;
