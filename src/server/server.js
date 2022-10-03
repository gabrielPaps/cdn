debugger;
import express, { Router} from "express";
import routes from './routes/index.js'
const app = express()
const port = 3000

app.use('/', routes)

export default function server(){
    return app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}


