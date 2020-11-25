const express = require('express')

const schemaCtrl = require('../controllers/schema-ctrl')

const router = express.Router()

router.get('/schema/:gameName',schemaCtrl.getDataSchema)
router.put('/schema/:gameName',schemaCtrl.putDataSchema)
router.delete('/schema/:gameName',schemaCtrl.deleteDataSchema)

module.exports = router