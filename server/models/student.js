const mongoose=require('mongoose')

const student= new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String
})

const studentmodel=mongoose.model("students",student)
module.exports=studentmodel;