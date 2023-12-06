const env = require('dotenv');
const express = require("express")
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require("path");


app.use(express.json());
app.use(cors());
// app.use(express.static(path.join('../public/Images')));
app.use(express.static('public/Images'));
env.config({path:"./config.env"})



  
  





const port = process.env.PORT;


require("./db/conn");


app.use(require("./routes/auth"));
app.use (require("./model/UserSchema"));
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req,res)=>{
    res.send("home page");
})


app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})
