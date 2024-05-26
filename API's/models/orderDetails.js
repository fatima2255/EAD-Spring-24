const mongoose=require('mongoose');

const OrderDetailsSchema=new mongoose.Schema({
    Order_ID:Number,
    Total_Things:Number,

},{timestamps:true});

module.exports= mongoose.model('OrderDetails',OrderDetailsSchema)