module.exports = {
  '!(src/graphql/generated/**/*)*.{js,ts,tsx}': [
    "eslint --ignore-pattern '!*' --fix --max-warnings=0",
    'jest --findRelatedTests --passWithNoTests',
  ],
  '*.{html,md,json,yml}': ['prettier --write'],
  '*.svg': ['prettier --write --parser html'],
  'styles.ts': 'stylelint --fix --config .stylelintrc.js',
};
