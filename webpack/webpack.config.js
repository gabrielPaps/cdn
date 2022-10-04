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
  entry: {
    index: path.resolve(__dirname,'../src/index.js'),
    app: path.resolve(__dirname,'../src/app.js'),
    sw: path.resolve(__dirname, '../src/app/config/sw.js')
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'statics/[hash][ext][query]',
  },
  optimization: {
    minimize: true
  },
  resolve:{
    extensions: ['js']
  },
  module: {
    rules: [
      //IMG
      {
        test: /\.ico|png/gi,
        type: 'asset/resource'
      },

      //HANDLEBARS
      { 
        test: /\.(handlebars|hbs)/gi, 
        loader: "handlebars-loader" 
      },
      //JAVASCRIPT
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname,"./src"),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  //TO DO: Extraer plugin en archivo separado
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
  //Evaluar sí vale la pena para compilación en prod
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../.temp_cache'),
  },
  resolve: {
    symlinks: false,
  },
};

module.exports  = (merge(pages, config))