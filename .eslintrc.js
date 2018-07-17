module.exports = {
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "commonjs": true,
    "es6": true,
    "browser": true,
    "node": true,
    "webextensions": true,
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-console": 0,
    "no-unused-vars": ["error"],
    "no-cond-assign": 0,
  }
}