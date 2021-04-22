/* eslint-disable
  @typescript-eslint/no-var-requires,
  no-undef
  */

const DEV_MODE = process.env.NODE_ENV !== 'production';

const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const postcssImport = require('postcss-import');
const precss = require('precss');
const mixins = require('postcss-mixins');

module.exports = {
  cache: true,
  mode: DEV_MODE ? 'development' : 'production',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'appfollow-ui': './src/index.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'docs')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      css: path.resolve(__dirname, 'src/css'),
    },
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${DEV_MODE ? 'development' : 'production'}`),
      },
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name]--[contenthash:8].min.css`,
    }),
  ],
  optimization: {
    minimize: !DEV_MODE,
    concatenateModules: true,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|tsx?)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'docs'),
        ],
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('.cache'),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: DEV_MODE}
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss',
              plugins: () => [
                postcssImport({
                  path: 'css',
                  addDependencyTo: webpack,
                }),
                mixins(),
                precss(),
                autoprefixer(),
                !DEV_MODE && csso({restructure: false, comments: 'none'})
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  performance: false,
};
