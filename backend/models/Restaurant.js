const mongoose=require("mongoose");

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // description:{
    //     type: String,
    //     required: true
    // },
    price : {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    rating:{
        type : Number,
        default: 0
    },
    type:{
        type:String,
        required:true,
    }
});

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location: {
        type: String,
        required: true
    },
    cuisine:[{
        type:String,
        required: true
    }],
    costForTwo: {
        type: Number,
        required: true
    },
    items: [foodItemSchema]
});

module.exports= mongoose.model('Restaurant', restaurantSchema);