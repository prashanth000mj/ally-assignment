module.exports = {
    env: {
      browser: true,
      es2021: true,
      'jest/globals': true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'jest'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
      'linebreak-style': 0,
      'no-param-reassign': ['error', { props: false }],
      'react/jsx-props-no-spreading': [
        2,
        {
          html: 'ignore',
        },
      ],
      'linebreak-style': 0,
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  };
  