const HtmlWebpackPlugin = require('html-webpack-plugin');

const excluidos = ['app']
const chunks = ['sw', 'index']

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            chunks: chunks,
            filename: 'index.html',
            template: './src/app/pages/home/index.hbs',
            inject: true
          }),
        new HtmlWebpackPlugin({
            chunks: chunks,
            filename: 'offline.html',
            template: './src/app/pages/offline/offline.hbs'
          }),
    ]
}
    
