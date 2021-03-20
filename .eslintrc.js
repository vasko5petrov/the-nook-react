const path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:unicorn/recommended",
        "plugin:css-modules/recommended"
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    settings: {
        "import/resolver": {
            "webpack": {
                "config": path.resolve("./", "webpack.config.js")
            }
        }
    },
    plugins: [
        "react",
        "import",
        "fp",
        "unicorn",
        "no-loops",
        "filenames",
        "promise",
        "css-modules"
    ],
    rules: {
        "array-callback-return": "error",
        "arrow-parens": ["error", "always"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "constructor-super": "error",
        "curly": ["error", "all"],
        "css-modules/no-unused-class": ["warn", { "camelCase": true }],
        "css-modules/no-undef-class": ["warn", { "camelCase": true }],
        "eqeqeq": "error",
        "fp/no-delete": "error",
        "fp/no-mutation": ["error", {
            "allowThis": true, "commonjs": true, "exceptions": [
                { "object": "document" },
                { "object": "window" },
            ]
        }],
        "filenames/match-exported": "error",
        "func-style": ["error", "expression"],
        "import/no-unresolved": "error",
        "import/newline-after-import": ["error", { "count": 1 }],
        "import/no-named-default": "error",
        "import/no-dynamic-require": "error",
        "import/no-useless-path-segments": "error",
        "import/no-named-as-default": "warn",
        "import/no-named-as-default-member": "error",
        "import/max-dependencies": ["error", {"max": 25}],
        "indent": "off",
        "indent-legacy": ["error", 4],
        "keyword-spacing": ["error", { "after": true }],
        "max-len": ["error", {
            "code": 150,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 5],
        "new-parens": "error",
        "no-else-return": "error",
        "no-floating-decimal": "error",
        "no-inline-comments": "error",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-useless-escape": "error",
        "no-loops/no-loops": "error",
        "no-var": "error",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "prefer-const": "error",
        "prefer-spread": "error",
        "promise/no-nesting": "error",
        "quotes": ["error", "single"],
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-closing-bracket-location": "error",
        "react/no-set-state": "error",
        "react/no-unknown-property": "off",
        "react/prop-types": ["error", { "skipUndeclared": true }],
        "react/self-closing-comp": ["error", { "component": true, "html": true }],
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx"] }],
        "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always", "afterOpening": "never" }],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-key": "error",
        "react/jsx-no-bind": ["error", { "ignoreRefs": true }],
        "react/no-string-refs": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-wrap-multilines": "error",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-uses-vars": "error",
        "react/no-unknown-property": ["error", {ignore: ["class", "for"]}],
        "react/no-typos": "error",
        "react/jsx-max-depth": ["error", { "max": 7 }],
        "react/no-unescaped-entities": "off",
        "semi": ["error", "always"],
        "space-before-blocks": "error",
        "unicorn/filename-case": "off",
        "unicorn/no-fn-reference-in-iterator": "off",
        "unicorn/new-for-builtins": "off",
        "unicorn/prefer-query-selector": "off",
        "unicorn/prefer-node-append": "off",
        "react/no-deprecated": "off" // Until we fix componentWillReceiveProps
    }
};