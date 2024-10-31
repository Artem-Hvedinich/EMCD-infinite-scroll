module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'vue/no-unused-components': 'warn',

        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
            },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
