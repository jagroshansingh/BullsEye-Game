require('dotenv').config()
const {connection}=require('./db')
const express=require('express')
const app=express()

app.use(express.json())



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log('db is successfully connected')
    } catch (error) {
        console.log(error)
    }
    console.log(`port is running at ${process.env.port}`)
})