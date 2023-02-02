const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hola, mundo horroroso 1!')
})

app.get('/hola', (req, res) => {
    res.send('Hola, mundo horroroso 2!')
})

app.listen(port, () => {
    console.log(`Mundo horroroso app listening on port ${port}`)
});

module.exports = app;