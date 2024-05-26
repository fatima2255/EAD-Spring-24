
const User = require('../models/user');

async function createUser(req,res){
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllUsers(req, res){
    try{
        const user=await User.find();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateUser(req,res){
    try{
        const{id}=req.params;
        const updateuser= await User.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateUser);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteUser(req,res){
    try{
        const{id}=req.params;
        await User.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
}