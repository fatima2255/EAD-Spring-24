
const Product=require('../models/product');

async function createProduct(req,res){
    try{
        const product=await Product.create(req.body);
        res.status(201).json(product);

    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function getAllProducts(req, res){
    try{
        const product=await Product.find();
        res.status(201).json(product);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

async function updateProduct(req,res){
    try{
        const{id}=req.params;
        const updateProduct= await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateProduct);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}async function deleteProduct(req,res){
    try{
        const{id}=req.params;
        await Product.findByIdAndRemove(id);
        res.sendStatus(204);
        
    }catch(err){
        res.status(500).json({error:err.message});
    }
    
}


module.exports={
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
}