const express = require("express");
var os = require("os");
var hostname = os.hostname();

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.status(200).send("Hello From: "+hostname);
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});