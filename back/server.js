const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());

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
