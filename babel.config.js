module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['module:metro-react-native-babel-preset'],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@configs': './src/configs',
        },
      },
    ],
  ],
};
