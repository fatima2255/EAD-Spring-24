const mongoose=require("mongoose");

const PaymentSchema=new mongoose.Schema({
    Total_Bill:Number,
    Amount_Recieved:String,
    Amount_Returned:String
},{timestamps:true});

module.exports= mongoose.model('Payment',PaymentSchema)