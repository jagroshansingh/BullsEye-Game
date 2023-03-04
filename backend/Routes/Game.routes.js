const express=require('express')
const { GameModel } = require('../Models/Game.model')

const GameRouter=express.Router()

GameRouter.post("/",async(req,res)=>{
    try {
        await GameModel.insertMany(req.body)
        res.send("It's success!")
        // res.send(await GameModel.find())
    } catch (error) {
        console.log(error)
    }
})

GameRouter.get("/leaderboard",async(req,res)=>{
    try {
        const see=await GameModel.find().sort({"score":1})
        res.send(see)
    } catch (error) {
        console.log(error)
    }
})

module.exports={GameRouter}