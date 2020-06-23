// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader' },
          {
            loader: 'react-docgen-typescript-loader',
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'babel-runtime': path.resolve(__dirname, '../node_modules/babel-runtime'),
    },
    extensions: ['js', 'jsx', '.tsx', '.ts'],
  },
};
