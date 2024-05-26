
const Address = require('../models/address');


async function createAddress(req,res){
    try{
        const address=await Address.create(req.body);
        res.status(201).json(address);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllAddresses(req, res){
    try{
        const address=await Address.find();
        res.status(201).json(address);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateAddress(req,res){
    try{
        const{id}=req.params;
        const updateAddress= await Address.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateAddress);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteAddress(req,res){
    try{
        const{id}=req.params;
        await Address.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createAddress,
    getAllAddresses,
    updateAddress,
    deleteAddress,
}