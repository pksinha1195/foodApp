const Cart = require ("../models/Cart");

const createCart= async(req, res)=>{
    try{
        const data= new Cart(req.body);
        console.log("backend data" ,req.body);
        const response = await data.save();
        console.log(response);
        res.status(200).json({data:response})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getCart= async(req, res)=>{
    try{
        console.log(req.params);
        const response = await Cart.find(req.params);
        res.status(200).json({data:response})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports={createCart}; 