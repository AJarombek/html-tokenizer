/**
 * Configuration for ESLint
 * @author Andrew Jarombek
 * @since 10/7/2023
 */

module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        "prettier"
    ],
    rules: {
        "comma-dangle": ["off"],
        "max-len": ["error", {"code" : 120}],
        "quotes": ["error", "single"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-var": "error",
        "prefer-const": "error",
        "no-console": "off",
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "printWidth": 120,
            "semi": true,
        }]
    },
    ignorePatterns: [
        'node_modules/**',
        '.eslintrc.js'
    ]
};
