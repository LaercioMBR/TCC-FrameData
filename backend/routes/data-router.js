const express = require('express')

const dataCtrl = require('../controllers/data-ctrl')

const router = express.Router()

router.get('/data/:gameName',dataCtrl.getData)
router.get('/data/:gameName/:characterName',dataCtrl.getDataByName)
router.post('/data/:gameName/:characterName', dataCtrl.createData)
router.put('/data/:gameName/:characterName', dataCtrl.updateData)
router.delete('/data/:gameName/:characterName', dataCtrl.deleteData)

module.exports = router