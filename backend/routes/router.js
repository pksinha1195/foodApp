const {findByName, findRestaurant,addRestaurant}= require( "../Controller/RestaurantC");
const {createUser, loginUser} =require("../Controller/userC")
const {createCart} = require("../Controller/CartC")
const Router =require("express");
const router= Router();


router.get('/findrestaurant', findRestaurant)
router.get("/findbyname/name/:name", findByName)
router.post("/addrestaurant", addRestaurant)

router.post("/createuser",createUser)
router.post("/loginuser",loginUser)
router.post("/createcart", createCart)



module.exports=router;