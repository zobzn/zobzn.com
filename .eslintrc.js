module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
    // "airbnb",
    // "wesbos"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // "no-console": 2,
    "react/prop-types": "off",
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      createClass: "createReactClass",
      version: "detect",
      pragma: "React"
    }
  }
};
