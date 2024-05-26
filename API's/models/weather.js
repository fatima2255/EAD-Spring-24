const mongoose=require('mongoose');

const weatherSchema=new mongoose.Schema({
    City:String,
    Speed_air:Number,
    Direction:String,

},{timestamps:true});

module.exports= mongoose.model('Weather',weatherSchema)