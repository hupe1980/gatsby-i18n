import path from 'path';

const onCreatePage = ({ page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions;
  const { fallbackLng, availableLngs, siteUrl, i18nextOptions } = pluginOptions;

  if (page.path.includes('dev-404')) {
    return Promise.resolve();
  }

  const pageContext = { ...page.context, path: undefined };

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
      },
    };

    deletePage(page);
    createPage(redirectPage);

    availableLngs.forEach(lng => {
      const localePage = {
        ...page,
        path: `/${lng}${page.path}`,
        context: {
          ...pageContext,
          availableLngs,
          fallbackLng,
          lng,
          routed: true,
          originalPath: page.path,
          siteUrl,
          i18nextOptions,
        },
      };

      createPage(localePage);
    });

    resolve();
  });
};

export default onCreatePage;
