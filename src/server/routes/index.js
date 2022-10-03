import express from "express"
let app = express()

import home from './home.js'

async function routes(app){
   home(app)
}

routes(app)

export default app
