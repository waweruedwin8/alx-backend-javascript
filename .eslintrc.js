module.exports = {
  parser: '@babel/eslint-parser', // Use @babel/eslint-parser
  env: {
    node: true, // Enable Node.js global variables
    jest: true, // Enable Jest global variables
  },
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:jest/recommended', // Use the recommended rules from eslint-plugin-jest
  ],
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript features
    sourceType: 'module', // Allow the use of imports
  },
  rules: {
    // Add custom rules here
    'no-undef': 'error', // Ensure variables are defined before use
  },
};

