const User =require("../models/User");

const createUser=async(request, response)=>{
    try{
        const user=new User(request.body);
        // console.log("request.body.email : ",request.body.email);
        const alreadyUser= await User.findByEmail(request.body.email);
        // console.log("alraedyUser: ",alreadyUser);
        // const alreadyUser =await user.find({"email": request.body.email})
        // console.log("x: " + alreadyUser );
        // if (alreadyUser.length > 0){
        //     response.status(200).json({message:"This email user already present \n Go for SignIn"})
        // }
        if(!alreadyUser.length){
            console.log("user not available");
            const newUser=await user.save();
            response.status(200).json({message:"user created successfully","created":1,data:newUser });
        }else{
            response.status(409).json({message:"user already present go for signin","created":0 });

        }

    }catch(error){
        response.status(500).json({message:error.message})
    }
}

const loginUser =async(req, res)=>{
    try{
        const user= req.body
        // console.log(user);
        const validUser=await User.find(user)
        // console.log(validUser);
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