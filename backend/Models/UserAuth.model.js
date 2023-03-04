
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    password:{type:String, require:true},
    first_name:{type:String, require:true},
    last_name:{type:String, require:false},
    user_name:{type:String, require:false},
    UserId:{type:String, require:true},
})

const ModelUserAuth= mongoose.model("UserDatabase", UserSchema)

module.exports = { ModelUserAuth }