const mongoose=require('mongoose')

const gameSchema=mongoose.Schema({
    playername:String,
    score:Number,
    timestamp:String
},{versionKey:false})

const GameModel=mongoose.model('allscore',gameSchema)

module.exports={GameModel}