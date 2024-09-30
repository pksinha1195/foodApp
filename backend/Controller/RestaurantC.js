const Restaurant = require("../models/Restaurant");



const findRestaurant= async(req,res)=>{
    try{
        const restaurants= await Restaurant.find();
        res.status(200).json(restaurants)
        // console.log(restaurants);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const findByName = async(req,res)=>{
    try{
        const data=req.params;
        console.log(data);
        const restaurant=await Restaurant.find(req.params)
        console.log(restaurant)
        res.status(200).send(restaurant);
    }catch(error){
        res.status(500).json({message : error.message});
    }
}

const addRestaurant = async(req,res)=>{
    console.log(req.body);
    const restaurant= new Restaurant(req.body);
    try{
        const newRestaurant = await restaurant.save();
        res.status(200).json(newRestaurant);
    }catch(error){
        res.status(500).send({message:error.message});
    }
};


module.exports = {findRestaurant, findByName, addRestaurant};