const mongoose=require('mongoose');

const addressSchema=new mongoose.Schema({
    street:String,
    house_no:Number,
    region:String,
    city:String,
    country:String
},{timestamps:true});

module.exports= mongoose.model('Address',addressSchema)