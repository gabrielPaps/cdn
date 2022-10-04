import path from "path"

export default (app) =>{
    app.post('/subscription', (req, res) => {
        res.send('okk')
    })
}