const svgLoader = require('../scripts/webpack/svgLoader.js');

// Override default svg loader behaviour
function removeSvgLoader(config) {
  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg'),
  );
  fileLoaderRule.exclude = /\.svg$/;
}

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-apollo-client',
  ],
  webpackFinal: (config) => {
    removeSvgLoader(config);
    svgLoader(config);

    return config;
  },
  // workaround to prevent SB order stories alphabetically instead of by export order at webpack 5
  // https://github.com/storybookjs/storybook/issues/18535#issuecomment-1164242797
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      ['babel-plugin-named-exports-order'],
      ['babel-plugin-styled-components'],
    ],
  }),
};
