// https://eslint.org/docs/user-guide/configuring
// File taken from https://github.com/vuejs-templates/webpack/blob/1.3.1/template/.eslintrc.js, thanks.

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        node: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['airbnb-base', 'plugin:mocha/recommended'],
    // required to lint *.vue files
    plugins: ['mocha',],
    // check if imports actually resolve
    settings: {
        // 'import/resolver': {
        //     webpack: {
        //         config: './webpack.config.js',
        //     },
        // },
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never'
            },
        ],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state',
                    // for vuex state
                    'acc',
                    // for reduce accumulators
                    'e',
                    // for e.returnvalue
                ],
            },
        ],
        // disallow default export over named export
        'import/prefer-default-export': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV
        ===
        'production'
            ?
            'error' : 'off',
        // Show warnings rather than errors; there's too much to fix.
        // Also we like 4 spaces.
        'indent': [
            'warn',
            4,
        ],
        // Let `git` handle this.
        'linebreak-style': [
            'off',
        ],
        'max-len': [
            'warn',
            120,
        ],
        "no-console": "off"
    },
};
