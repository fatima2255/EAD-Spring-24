
const Weather = require('../models/weather');

async function createWeather(req,res){
    try{
        const weather=await Weather.create(req.body);
        res.status(201).json(weather);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllWeathers(req, res){
    try{
        const weather=await Weather.find();
        res.status(201).json(weather);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateWeather(req,res){
    try{
        const{id}=req.params;
        const updateWeather= await Weather.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateWeather);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteWeather(req,res){
    try{
        const{id}=req.params;
        await Weather.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createWeather,
    getAllWeathers,
    updateWeather,
    deleteWeather,
}