module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "airbnb"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        camelcase: "off",
        indent: ["error", 4, { SwitchCase: 1 }],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "react/display-name": "off",
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true }
        ],
        "react/jsx-indent": [0, "tab"],
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/function-component-definition": [
            2,
            { namedComponents: ["function-declaration", "arrow-function"] }
        ],
        "react/jsx-indent-props": [2, 4],
        "arrow-body-style": 0,
        "object-curly-newline": 0,
        "react/self-closing-comp": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/require-default-props": 0,
        "operator-linebreak": 0,
        "no-underscore-dangle": 0,
        "react/jsx-props-no-spreading": 0,
        "no-param-reassign": 0,
        "consistent-return": 0,
        "import/no-named-as-default-member": 0,
        "prefer-arrow-callback": 0,
        "prefer-template": 0,
        "react/jsx-no-constructed-context-values": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-shadow": 0,
        "no-restricted-syntax": 0,
        "guard-for-in": 0,
        "react/forbid-prop-types": 0,
        "react/no-unstable-nested-components": 0,
        "import/newline-after-import": 0,
        "import/first": 0,
        "prefer-destructuring": 0,
        "implicit-arrow-linebreak": 0
    }
};
