const express=require('express')
const { GameModel } = require('../Models/Game.model')

const GameRouter=express.Router()

GameRouter.post("/",async(req,res)=>{
    try {
        await GameModel.insertMany(req.body)
        res.send(await GameModel.find())
    } catch (error) {
        console.log(error)
    }
})

module.exports={GameRouter}