const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type:String,
        required: [true, "email id required"],
        unique: true,
        lowercase: true,
        trim:true,
        index: true,
    },
    password:{
        type: String,
        required : true,
    },
    address:{
        type: String,
        required: true,
    }  
     
},
{
    statics : {
        findByEmail(email){
            return this.find({email:email})
        }
    }
},

)

// userSchema.statics.findByEmail=function(email){
//     return this.findByEmail({email:this.email})
// }



module.exports = mongoose.model("User", userSchema);