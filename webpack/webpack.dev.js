const path = require('path');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const {merge} = require('webpack-merge')
const pages = require('./partials/html.js')


// INVESTIGAR
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

config = {

  mode: 'development',
  entry: {
    index: './src/index.js',
    app: './src/app.js',
    sw: path.resolve(__dirname, '../src/app/config/sw.js')
  },
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'statics/[hash][ext][query]',
    clean: true,
    publicPath: '/',
  },
  optimization: {
    minimize: false
  },
  resolve:{
    extensions: ['js']
  },
  module: {
    rules: [
      {
        test: /\.(ico|png)/gi,
        type: 'asset/resource'
      },

      //HANDLEBARS
      { test: /\.(handlebars|hbs)$/ig,
         loader: "handlebars-loader" },
      //JAVASCRIPT
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname,"./src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),

    new Dotenv(),
    
    new CopyPlugin({
      patterns: [
        { from: "./.env", to: "./" },
      ],
    }),
   

    //Progress bar
    new ProgressBarPlugin({
      format: `  :msg [:bar] ":percent"(:elapsed s)`,
    }),
  ],
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../.temp_cache'),
  },
  resolve: {
    symlinks: false,
  },
  // devServer: {
  //   contentBase:  path.resolve(__dirname, '../dist'),
  //   overlay: true
  // }
};

module.exports  = (merge(pages, config))