// const fs = require('fs');
// const path = require('path');

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
    //        "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
    //        "prettier"
  ],
  rules: {
    "no-console": 1
    // 'graphql/template-strings': [
    //     'error',
    //     {
    //         env: 'apollo', // 'literal'
    //         tagName: 'gql',
    //         schemaString: fs.readFileSync(
    //             path.resolve(__dirname, './schema.graphql'),
    //             'utf8'
    //         )
    //     }
    // ]
    //        "prettier/prettier": 2
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  }
};
