const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    Order_no:Number,
    Order_by:String,
    Order_amount:String,
   
    
},{timestamps:true});

module.exports= mongoose.model('Order',OrderSchema)