module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // parser: "babel-eslint",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    // "eslint-plugin-import",
    // "eslint-plugin-jsdoc",
    // "eslint-plugin-prefer-arrow",
    // "eslint-plugin-prettier",
    "import",
    "react",
    "react-hooks",
    "jest",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    // "no-console": 2,
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      version: "detect",
      pragma: "React",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
