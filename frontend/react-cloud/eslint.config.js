module.exports = {
  root: true,
  extends: [
    "@ljharb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-refresh/recommended"
  ],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh"
  ],
  rules: {
    "new-cap": [
      2,
      {
        capIsNewExceptions: [
          "GetIntrinsic"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};