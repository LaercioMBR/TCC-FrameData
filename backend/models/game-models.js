const mongoose = require('mongoose')
const db = require('../db')
const Schema = mongoose.Schema

const Game = new Schema(
    {
        name: {type: String, required: true},
        series: {type: String, required: false},
    }
)

module.exports = mongoose.model('games', Game)