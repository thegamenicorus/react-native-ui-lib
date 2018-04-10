const validColors = require("./src/style/colorsPalette")
module.exports = {
  "parser": "babel-eslint",
  "plugins": ["react-native", "uilib"],
  "extends": ["airbnb", "./eslint-rules/.eslintrc.js"],
  "rules": {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-use-before-define": "off",
    "max-len": [2, 120, 4, {"ignoreUrls": true}],
    "object-curly-spacing": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/prefer-stateless-function": "off",
    "react/require-default-props": "off",
    // "uilib/no-hard-coded-font": "error",
    // "uilib/no-hard-coded-color": "error"
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    },
    "uiLib": {
     "validColors": validColors
    }
  }
}
