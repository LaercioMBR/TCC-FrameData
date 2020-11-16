const express = require('express')

const GameCtrl = require('../controllers/game-ctrl')
const dataCtrl = require('../controllers/data-ctrl')

const router = express.Router()

router.get('/games/:name', GameCtrl.getGamesByName)
router.get('/games', GameCtrl.getGames)
router.post('/games/:name', GameCtrl.createGame)
router.put('/games/:name/:newname', GameCtrl.updateGame)
router.delete('/games/:name', GameCtrl.deleteGame)

router.get('/data/:gameName',dataCtrl.getData)
router.get('/data/:gameName/:characterName',dataCtrl.getDataByName)
router.post('/data/:gameName/:characterName', dataCtrl.createData)
router.put('/data/:gameName/:characterName', dataCtrl.updateData)
router.delete('/data/:gameName/:characterName', dataCtrl.deleteData)


module.exports = router