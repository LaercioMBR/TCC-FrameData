const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const app = express()
const apiPort = 3000
const gameRouter = require('./routes/game-router')

const corsOptions = {

};
app.use(bodyParser.urlencoded({    extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

db.on('error', console.error.bind(console, 'Some shit happened:'))

var teste = 1;
app.get('/', (req, res) => {

    teste += 1;
    res.send('Teste dois' + teste)
})

app.use('/api', gameRouter)

app.listen(apiPort, () => {
    console.log(`Servidor provavelmente rodando na porta ${apiPort}`)
})