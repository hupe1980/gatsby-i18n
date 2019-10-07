import path from 'path';
import { resolveLocalizedPath } from '../utils';

const onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions;
  const { fallbackLng, availableLngs, siteUrl, i18nextOptions, localizedPaths = {} } = pluginOptions;
  const resolvePath = resolveLocalizedPath(localizedPaths, page.path);

  if (page.path.includes('dev-404')) {
    return Promise.resolve();
  }

  const pageContext = { ...page.context };

  return new Promise(resolve => {
    const redirect = path.resolve('./.cache/@wapps/redirect.js');
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        ...pageContext,
        availableLngs,
        fallbackLng,
        lng: null,
        routed: false,
        redirectPage: page.path,
        siteUrl,
        i18nextOptions,
        localizedPaths,
      },
    };

    deletePage(page);
    createPage(redirectPage);

    availableLngs.forEach(lng => {
      const localePage = {
        ...page,
        path: `/${lng}${resolvePath(lng)}`,
        context: {
          ...pageContext,
          availableLngs,
          fallbackLng,
          lng,
          routed: true,
          originalPath: page.path,
          siteUrl,
          i18nextOptions,
          localizedPaths,
        },
      };

      createPage(localePage);
    });

    resolve();
  });
};

export default onCreatePage;
