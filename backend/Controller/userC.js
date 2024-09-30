const user =require("../models/User");

const createUser=async(request, response)=>{
    try{
        const User=new user(request.body);
        console.log(User);
        const alreadyUser =await user.find({"email": request.body.email})
        // console.log("x: " + alreadyUser );
        // if (alreadyUser.length > 0){
        //     response.status(200).json({message:"This email user already present \n Go for SignIn"})
        // }else{
            const newUser=await User.save();
            response.status(200).json({message:"user created successfully",data:newUser });
        // }
    }catch(error){
        response.status(500).json({message:error.message})
    }
}

const loginUser =async(req, res)=>{
    try{
        const User= req.body
        console.log(User);
        const validUser=await user.find(User)
        console.log(validUser);
        if(validUser.length >= 1){
            res.status(200).json({data:validUser, message:"User Loged In!"})
        }else{
            res.status(400).json({message:"user not found"})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports={createUser, loginUser};