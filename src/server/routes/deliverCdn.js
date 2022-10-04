export default (app) =>{
    app.get('/cdn', (req, res) => {
        res.sendFile('./libreria.js')
    })
}