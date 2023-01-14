const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET ="AmineSecretKey";
module.exports.createUser = async (req,res) => {
    try {
        // get body content
        let { name,
            email,
            password,
            } = req.body
        let newUser = new user({
            name: name,
            email: email,
            password: password,
             
        })
        let savedUser = await newUser.save();
        return res.status(200).json({
            success: true,
            user: savedUser
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.getAllUsers = async (req,res) => {
    try {
        let users = await user.find();
        return res.status(200).json({
            success: true,
            users
        })
    }catch(err) {
        return res.status(400).json({
            success:false,
            error: err
        })
    }
}
module.exports.loginUser = async (req,res) => {
    const { email, password } = req.body;
    const getUser = await user.findOne({ email });
    if (!getUser) {
      return res.json({ error: "User Not found" });
    }
    if (bcrypt.compare(password, getUser.password)) {
      const token = jwt.sign({ email: getUser.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Wrong Password" });
  }


module.exports.SaveUserToken = async (req,res) => {
  const { token } = req.body;
  try {
    const User = jwt.verify(token, JWT_SECRET);
    console.log(User);
    const useremail = User.email;
    user.findOne({ email: useremail }).then((data) => {
        res.send({ status: "ok", data: data });
      }).catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}

  }