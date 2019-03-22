const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
  const config = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader?cacheDirectory=.babel_cache'
          }
        },
        {
          test: /.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Woocart',
        filename: 'index.html',
        publicUrl: '',
        template: path.join(__dirname, 'public', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      }),
      new webpack.DefinePlugin({
        // global variables
        GOOGLE_API_KEY: process.env.npm_package_config_GOOGLE_API_KEY
      })
    ]
  };

  if (argv.mode === 'production') {
    // config.plugins.push(new UglifyJsPlugin());
    config.devtool = 'source-map';
  }

  if (argv.hot) {
    config.devServer = {
      hot: true,
      inline: true,
      historyApiFallback: true,
      contentBase: __dirname + '/'
    };
  }

  return config;
};
