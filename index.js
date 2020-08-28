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

app.get('/', (req, res) => {
    res.send('eae garai')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => {
    console.log(`Servidor rodando na porta ${apiPort}`)
})