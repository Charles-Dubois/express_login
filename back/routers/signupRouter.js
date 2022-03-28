const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../secret");
const User = require("../model/userModel");
const token = jwt.sign({ id: 5 }, secret);
router.use(express.json());
router.get("/", async (req, res) => {
  res.json({ message: "heelloo" });
});

router.post("/", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 12);
  let newUser;
  try {
    newUser = await User.create(req.body);
  } catch (err) {
    return res.status(400).send("This mail is already used");
  }
  console.log(newUser);
  res.cookie("jwt", token, { httpOnly: true, secure: false });
  res.send("reuqest received, cookie created");
});
module.exports = router;
