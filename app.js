const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
var path = require("path");

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/upload", function (req, res) {
  res.status(200).json({ file: req.files.picture });
  console.log(req.files.picture);
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
