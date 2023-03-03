const mongoose=require('mongoose')
require('dotenv').config()

let connection=mongoose.connect(process.env.dburl)

module.exports={connection}