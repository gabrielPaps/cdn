// const webpack = require('webpack')
// const webpackDevMiddleware = require("webpack-dev-middleware");

// const compiler = webpack(configuration)
// const configuration = require( '../../webpack/webpack.dev.js')(compiler, configuration.devServer);
import path from "path";

import './webpush.js'
import express from "express";
import morgan from "morgan";
import routes from './routes/index.js'
const app = express()

const port = 3000

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//STATIC
app.use(express.static('dist'));

//RUTAS
app.use('/', routes)

export default function server(){
    return app.listen(port, () => {
        console.log('Started')
      })
}


