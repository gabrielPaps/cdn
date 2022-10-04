import express from "express"
let router = express.Router()

import home from './home.js'
import offline from './offline.js'
import cdn from './deliverCdn.js'
import subscription from './subscription'

async function routes(router){
   home(router)
   offline(router)
   cdn(router)
   subscription(router)
}

routes(router)

export default router
