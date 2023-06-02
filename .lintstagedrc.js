const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    "git add", // "jest --bail --find-related-tests",
  ],
  "**/*.{yml,yaml,json,scss,md}": ["prettier --write", "git add"],
};

//   "lint-staged": {
//     "**/*.{js,jsx}": [
//       "eslint --fix",
//       "git add"
//     ],
//     "**/*.{yml,yaml,json,scss,md}": [
//       "prettier --write",
//       "git add"
//     ]
//   },
//   "lint-staged-bak": {
//     "**/*.{js,jsx}": [
//       "eslint --fix",
//       "git add",
//       "jest --bail --find-related-tests"
//     ],
//     "**/*.{yml,yaml,json,scss,md}": [
//       "prettier --write",
//       "git add"
//     ]
//   },
