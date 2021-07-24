const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const app = express()
const apiPort = 3000
const gameRouter = require('./routes/game-router');
const dataRouter = require('./routes/data-router');
const schemaRouter = require('./routes/schema-router');

const corsOptions = {};

app.use(bodyParser.urlencoded({    extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

db.on('error', console.error.bind(console, 'Something happened on the database:') )

var test = 1;
app.get('/', (req, res) => {
    test += 1;
    res.send('Test message' + test)
})

app.use('/api', gameRouter)
app.use('/api', dataRouter)
app.use('/api', schemaRouter)

app.listen(apiPort, () => {
    console.log(`Servidor provavelmente rodando na porta ${apiPort}`)
})