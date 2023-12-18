module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/preset-typescript'],
    typescript: {
      check: true,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
    },
  };