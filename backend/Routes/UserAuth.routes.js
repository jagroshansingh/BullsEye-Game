const express = require("express");
const UserAuthRoutes = express.Router();

// Model import for adding user
const bcrypt = require("bcrypt"); // Bcript import for password protect
const jwt = require("jsonwebtoken"); // jwt import for geting unic token
const { ModelUserAuth } = require("../Models/UserAuth.model");

UserAuthRoutes.get("/", async (req, res) => {
  console.log('get')
  try {
      res.status(200).send({ msg: "User not found", status: "error" });
    } catch (err) {
    res
      .status(200)
      .send({
        msg: "Something went wrong please try again",
        err,
        status: "error",
      });
  }
});


UserAuthRoutes.post("/register", async (req, res) => {
    const UserDetails = req.body;
    const { user_name,  password } = UserDetails;
    const unic = "8723ty8723872109809][32/";

    console.log(req.body)

    try {
      let Single_User = await ModelUserAuth.find({ user_name });
      if (Single_User.length !== 0) {
        return res
          .status(200)
          .send({ msg: "User already exists", status: "error" });
      } else {
        bcrypt.hash(password, 8, async (err, protected_password) => {
          if (!err) {
            UserDetails.password = protected_password;
            const UserId = jwt.sign({ user_name, id: password }, unic);
            UserDetails.UserId = UserId;
            let NewUser = new ModelUserAuth(UserDetails);
            NewUser.save();
            res
              .status(200)
              .send({ msg: "User has been created", status: "success" });
          } else {
            console.log(err, "err line 43");
            res
              .status(200)
              .send({
                msg: "Something went wrong please try again",
                status: "error",
              });
          }
        });
      }
    } catch (err) {
      console.log(err, "err line 50");
      res
        .status(200)
        .send({ msg: "Something went wrong please try again", status: "error" });
    }
  });
  
  UserAuthRoutes.post("/login", async (req, res) => {
    const UserDetails = req.body;
    const { user_name, password } = UserDetails;
    const Key = "Style_User-!`^8};^*3iu($*";

    console.log(req.body)

    try {
      let User_Details = await ModelUserAuth.find({ user_name });
      if (User_Details.length > 0) {
          bcrypt.compare(
            password,
            User_Details[0].password,
            async (err, result) => {
              if (result) {
                const token = jwt.sign({ user_name, id: password }, Key);
                res
                  .status(200)
                  .send({
                    msg: "User login successfully",
                    UserId: User_Details[0].UserId,
                    name: User_Details[0].first_name,
                    last: User_Details[0].last_name,
                    token,
                    status: "success",
                  });
              } else {
                res.status(200).send({ msg: "Wrong password", status: "error" });
              }
              if (err) {
                res
                  .status(200)
                  .send({
                    msg: "Something went wrong please try again",
                    err,
                    status: "error",
                  });
              }
            }
          );
        
      } else {
        res.status(200).send({ msg: "User not found", status: "error" });
      }
    } catch (err) {
      console.log(err, "err line 98");
      res
        .status(200)
        .send({
          msg: "Something went wrong please try again",
          err,
          status: "error",
        });
    }
  });
  

  module.exports = { UserAuthRoutes }