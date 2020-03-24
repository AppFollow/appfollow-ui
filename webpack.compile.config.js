// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
// const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const miniExtractCSS = new MiniCssExtractPlugin({
  filename: 'css/index.css',
});
// #PostCss plugins
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const inlineSvg = require('postcss-inline-svg');
const postcssImport = require('postcss-import');
const precss = require('precss');
const cssvariables = require('postcss-css-variables');
const mixins = require('postcss-mixins');

const distDir = path.resolve('./lib');

const postcssLoaderProd = [
  {loader: 'css-loader'},
  {
    loader: 'postcss-loader',
    options: {
      parser: 'postcss-scss',
      plugins: () => [
        postcssImport({
          path: 'css',
          addDependencyTo: webpack,
        }),
        cssvariables(),
        mixins(),
        precss(),
        inlineSvg({
          paths: ['img/icon'],
        }),
        csso({
          restructure: false,
          comments: 'none',
        }),
        autoprefixer({
          browsers: ['last 5 versions'],
        }),
      ],
    },
  },
];

const alias = {
  app: path.resolve(__dirname, 'src/app'),
  css: path.resolve(__dirname, 'src/css'),
};

module.exports = {
  // cache: true,
  mode: 'production',
  output: {
    filename: 'index.js',
    path: distDir,
    publicPath: '/lib',
    libraryTarget: 'commonjs',
  },
  entry: {
    index: './src/index.js',
  },
  externals: [nodeExternals()],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'js')],
    extensions: ['.js', '.jsx'],
    alias,
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['./lib/'],
    }),
    new WriteFilePlugin(),
    new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      cn: 'classnames',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
    new WebpackNotifierPlugin({
      title: 'Appfollow UI',
      alwaysNotify: true,
    }),
    miniExtractCSS,
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    // concatenateModules: true,
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     sourceMap: true,
    //   }),
    // ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('.cache'),
            },
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          ...postcssLoaderProd,
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
