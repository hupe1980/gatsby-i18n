import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

import { I18nConsumer } from './I18nContext';
import { resolveLocalizedPath } from './utils';

const Link = ({ to, lng, children, localizedPaths, ...rest }) => {
  const resolvePath = resolveLocalizedPath(localizedPaths, to);

  return (
    <GatsbyLink to={lng ? `/${lng}${resolvePath(lng)}` : `${to}`} {...rest}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default props => (
  <I18nConsumer>{({ lng, localizedPaths }) => <Link lng={lng} localizedPaths={localizedPaths} {...props} />}</I18nConsumer>
);
