export {
  onPreBootstrap,
  onCreateNode,
  onPreExtractQueries,
  onCreatePage,
} from '@wapps/gatsby-i18n/plugin';

export const onCreateBabelConfig = ({ actions }) => {
  const { setBabelPreset } = actions;

  setBabelPreset({
    name: `@lingui/babel-preset-react`,
  });
};
