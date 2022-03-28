const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = 8000;
const mongoKey = require("./mongoKey");
const SignupRouter = require("./routers/signupRouter");
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(mongoKey, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongo connection done !"))
  .catch((err) => console.log(err));

app.use("/signup", SignupRouter);
app.get("/", (_req, res) => {
  res.send("hello world");
});
app.get("*", (_req, res) => {
  console.log("error 404");
  res.status(404).json({ message: "error 404" });
});
app.listen(PORT, () => {
  console.log(`on port ${PORT}`);
});
