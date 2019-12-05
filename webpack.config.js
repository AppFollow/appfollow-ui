const path = require('path');
const __DEV__ = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const chunkNameJs = `[name]${__DEV__ ? '' : '--[chunkhash:8]'}.min`;
const chunkNameCss = `[name]${__DEV__ ? '' : '--[contenthash:8]'}.min`;
const distDir = path.resolve('./assets');
const miniExtractCSS = new MiniCssExtractPlugin({
  filename: `css/${chunkNameCss}.css`,
});
// #PostCss plugins
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const inlineSvg = require('postcss-inline-svg');
const postcssImport = require('postcss-import');
const precss = require('precss');
const reporter = require('postcss-reporter');
const cssvariables = require('postcss-css-variables');
const mixins = require('postcss-mixins');

const Manifest = require('./utils/writeManifest');
const showStartTimestamp = require('./utils/showStartTimestamp');

const postcssLoaderDev = [
  {loader: 'css-loader', options: {sourceMap: true}},
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
        reporter({
          clearMessages: true,
        }),
      ],
    },
  },
];

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
  scss: path.resolve(__dirname, 'src/scss'),
};

if (__DEV__) {
  alias['react-dom'] = 'react-dom/profiling';
}

module.exports = {
  cache: true,
  mode: __DEV__ ? 'development' : 'production',
  devtool: __DEV__
    ? 'cheap-module-eval-source-map'
    : 'source-map',
  output: {
    filename: `${chunkNameJs}.js`,
    path: distDir,
    publicPath: '/assets',
  },
  entry: {
    'appfollow-ui': './src/index.js',
    // 'stylebook': './src/stylebook.js',
  },
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
    showStartTimestamp,
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['./assets/'],
    }),
    new WriteFilePlugin(),
    new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
      moment: 'moment',
      classNames: 'classnames',
      PropTypes: 'prop-types',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${__DEV__ ? 'development' : 'production'}`),
      },
    }),
    new Manifest(distDir, {
      filename: 'manifest.json',
      publicPath: '/assets',
    }),
    new WebpackNotifierPlugin({
      title: 'Appfollow UI',
      alwaysNotify: true,
    }),
    miniExtractCSS,
  ].concat(__DEV__ ? [
    // development
  ] : [ // production
    new WebpackChunkHash(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.HashedModuleIdsPlugin(),
  ]),
  optimization: __DEV__ ? {} : {
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
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
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          ...(__DEV__ ? postcssLoaderDev : postcssLoaderProd),
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
  devServer: {
    publicPath: '/assets/',
    contentBase: __dirname,
    port: 8079,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
