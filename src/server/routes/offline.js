import path from "path"

export default (app) =>{
    app.get('/offline', (req, res) => {
        res.sendFile(path.join(__dirname, './offline.html'))
    })
}