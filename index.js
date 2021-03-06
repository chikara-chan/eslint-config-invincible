module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "array-bracket-spacing": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "block-spacing": ["error"],
    "brace-style": ["error"],
    "camelcase": ["error"],
    "capitalized-comments": ["error"],
    "comma-dangle": ["error"],
    "comma-spacing": ["error"],
    "comma-style": ["error"],
    "computed-property-spacing": ["error"],
    "curly": ["error"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error"],
    "eol-last": ["error"],
    "func-call-spacing": ["error"],
    "func-name-matching": ["error"],
    "generator-star-spacing": ["error"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "MemberExpression": 1
    }],
    "jsx-quotes": ["error"],
    "key-spacing": ["error"],
    "keyword-spacing": ["error"],
    "linebreak-style": ["error"],
    "lines-around-comment": ["error", {
      "beforeLineComment": true,
      "allowBlockStart": true
    }],
    "lines-around-directive": ["error"],
    "new-cap": ["error"],
    "newline-after-var": ["error"],
    "newline-before-return": ["error"],
    "new-parens": ["error"],
    "no-cond-assign": ["off"],
    "no-console": ["off"],
    "no-delete-var": ["off"],
    "no-extra-bind": ["error"],
    "no-extra-parens": ["error"],
    "no-floating-decimal": ["error"],
    "no-lonely-if": ["error"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxBOF": 0,
      "maxEOF": 0
    }],
    "no-multi-spaces": ["error"],
    "no-redeclare": ["error"],
    "no-trailing-spaces": ["error"],
    "no-undef-init": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "minProperties": 1
      },
      "ObjectPattern": "never"
    }],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error"],
    "operator-assignment": ["error"],
    "one-var": ["error"],
    "one-var-declaration-per-line": ["error"],
    "padded-blocks": ["error", "never"],
    "prefer-arrow-callback": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "quotes": ["error", "single"],
    "quote-props": ["error", "as-needed"],
    "rest-spread-spacing": ["error"],
    "semi": ["error", "never"],
    "space-before-blocks": ["error"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": ["error"],
    "template-curly-spacing": ["error"],
    "yield-star-spacing": ["error"],
    "yoda": ["error"]
  }
}
