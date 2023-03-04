require('dotenv').config()
const {connection}=require('./db')
const express=require('express')
const { GameRouter } = require('./Routes/Game.routes')
const { UserAuthRoutes } = require('./Routes/UserAuth.routes')
const app=express()
const cors=require('cors')

app.use(cors())

app.use(express.json())

app.use("/record",GameRouter)
app.use("/UserAuth",UserAuthRoutes)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log('db is successfully connected')
    } catch (error) {
        console.log(error)
    }
    console.log(`port is running at ${process.env.port}`)
})