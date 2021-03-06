module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'off',
    'one-var': 'off',
    'semi': 'warn',
    'no-case-declarations': 'off',
    'no-unreachable': 'warn',
    'vue/no-unused-components': 'warn',
    'object-curly-spacing': 'warn',
    'object-property-newline': 'off',
    'indent': 'off',
    'semi': 'off',
    'quote-props': 'off'
  }
}
