const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const User = require("../model/UserSchema")






const storage = multer.diskStorage({
    destination: path.join("public/Images"),
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
    
  });

const upload = multer({ storage: storage });




router.post("/login", upload.single('file'), async (req, res) => {
    
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(422).json({ message: "Please fill in all the required fields" });
    return;
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.status(422).json({ message: "Email Already Exists" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email,
        password, 
        image:req.file.filename
      
        // Save the file path in the database

      });
     

      await newUser.save();

      if (newUser) {
        res.status(201).json(newUser);
        console.log(newUser);
      } else {
        res.status(422).json({ message: "Invalid Credentials" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});




module.exports = router;

