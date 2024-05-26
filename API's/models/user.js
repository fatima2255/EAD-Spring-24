const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:String,
},{timestamps:true});

module.exports= mongoose.model('User',userSchema)