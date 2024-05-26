
const OrderDetails = require('../models/orderDetails');


async function createOrderDetails(req,res){
    try{
        const OrderDetails=await OrderDetails.create(req.body);
        res.status(201).json(OrderDetails);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllOrderDetails(req, res){
    try{
        const OrderDetails=await OrderDetails.find();
        res.status(201).json(OrderDetails);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateOrderDetails(req,res){
    try{
        const{id}=req.params;
        const updateOrderDetails= await OrderDetails.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateOrderDetails);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteOrderDetails(req,res){
    try{
        const{id}=req.params;
        await OrderDetails.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createOrderDetails,
    getAllOrderDetails,
    updateOrderDetails,
    deleteOrderDetails,
}