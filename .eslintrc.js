module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "semi": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "comma-dangle":  ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore",
    }]
  },
  "env": {
    "browser": true,
    "jest": true
  }
};
