var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("hello from library app");
});

app.listen(4242, function () {
  console.log("listening on port 4242");
});
