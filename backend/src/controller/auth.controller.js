const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')

async function registerController(req, res) {
  const { username, password } = req.body;
  const existingUser = await userModel.findOne({ username });

  if (existingUser) {
    return res.status(409).json({
      message: "user name already exist",
    });
  }
  const user = await userModel.create({
    username,
    password : await bcrypt.hash(password,10)
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token,{
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: "/"
  });

  res.status(201).json({
    message: "user created successfully",
    user,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username
  })
  if(!user){
    return res.status(400).json({message:"User not found"})
  }
const isPasswordValid = await bcrypt.compare(password,user.password)

if(!isPasswordValid){
    return res.status(400).json({message:"Invalid Password "})
}
const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
res.cookie('token',token,{
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: "/"

})

res.status(200).json({
    message:"User logged in successfully",
    user:{
        username:user.username,
        id: user._id
    }
})
}
 
async function logoutController(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User Logged out sucessfully"
    })
}


module.exports = {
  registerController,
  loginController,
  logoutController
};
