import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { I18nConsumer } from './I18nContext';
import { resolveLocalizedPath } from './utils';


const defaultProps = {
  hreflang: true, // TODO https://github.com/nfl/react-helmet/issues/342
};

function Head({
  availableLngs,
  children,
  lng,
  originalPath,
  siteUrl,
  hreflang,
  localizedPaths,
}) {
  const resolvePath = resolveLocalizedPath(localizedPaths, originalPath);

  return (
    <>
      <Helmet>
        <html lang={lng} />
        <link rel="alternate" href={`${siteUrl}`} hreflang="x-default" />
        {availableLngs.map(value => (
          <link
            key={value}
            rel="alternate"
            href={`${siteUrl}${value}${resolvePath(value)}`}
            hreflang={value}
          />
        ))}
        {children}
      </Helmet>
    </>
  );
}

Head.defaultProps = defaultProps;

export default props => (
  <I18nConsumer>{lngProps => <Head {...lngProps} {...props} />}</I18nConsumer>
);
