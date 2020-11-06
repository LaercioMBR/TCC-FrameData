const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const app = express()
const apiPort = 3000
const movieRouter = require('./routes/movie-router')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'Some shit happened:'))

var teste = 1;
app.get('/', (req, res) => {

    teste +=1;
    res.send('Teste dois' + teste)
})

app.use('/api', movieRouter)

app.listen(apiPort, () => {
    console.log(`Servidor provavelmente rodando na porta ${apiPort}`)
})