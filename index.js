module.exports = {
  extends: [
    'prettier',
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  env: {
    browser: true,
  },

  rules: {
    'no-prototype-builtins': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
};
