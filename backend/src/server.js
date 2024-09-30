const mongoose = require("mongoose");
const express = require("express");
const router = require("../routes/router.js");
var bodyParser = require('body-parser')
var cors=require("cors")
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const app = express();
app.use(cors())
const port = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost:27017/myrestaurantDB");

app.use(express.json());
app.use("/",urlencodedParser, router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
