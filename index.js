const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola, mundo horroroso 1!')
})

app.get('/hola', (req, res) => {
    res.send('Hola, mundo horroroso 2!')
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Mundo horroroso app listening on port ${port}`)
})