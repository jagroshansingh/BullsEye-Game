const mongoose=require('mongoose')

const gameSchema=mongoose.Schema({
    playerid:String,
    score:String,
},{versionKey:false})

const GameModel=mongoose.model('allscore',gameSchema)

module.exports={GameModel}