const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/bundle.[contenthash:8].js',
      // Relative (not '/'): this site is deployed as a GitHub Pages *project*
      // page under /divyanshupandey.github.io/, not at the domain root, since
      // the repo name doesn't match the owner's username exactly.
      publicPath: '',
      clean: true,
    },
    resolve: {
      extensions: ['.web.js', '.js', '.jsx'],
      alias: {
        'react-native$': 'react-native-web',
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules\/(?!(react-native-web)\/).*/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: { filename: 'static/media/[name].[contenthash:8][ext]' },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.svg'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'build'),
            globOptions: { ignore: ['**/index.html'] },
          },
        ],
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, 'build'),
      port: 3000,
      historyApiFallback: true,
    },
    devtool: isProduction ? false : 'eval-source-map',
  };
};
