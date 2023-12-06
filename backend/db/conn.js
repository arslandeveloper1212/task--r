const mongoose = require("mongoose");


mongoose.set("strictQuery", false);

mongoose.connect(process.env.DB).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("not connected");
})