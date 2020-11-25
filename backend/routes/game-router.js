const express = require('express')

const GameCtrl = require('../controllers/game-ctrl')

const router = express.Router()

router.get('/games/:name', GameCtrl.getGamesByName)
router.get('/games', GameCtrl.getGames)
router.post('/games/:name', GameCtrl.createGame)
router.put('/games/:name/:newname', GameCtrl.updateGame)
router.delete('/games/:name', GameCtrl.deleteGame)

module.exports = router