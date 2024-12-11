module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
};

module.exports = {
  extends: ['plugin:vue/vue3-essential', '@vue/prettier'],
  rules: {
    'vue/no-unused-vars': 'error',
    'prettier/prettier': ['error'],
  },
};

