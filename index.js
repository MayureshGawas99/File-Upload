const express = require("express");
const app = express();
const PORT = 1338;

app.use(express.json());
app.use(express.static("content"));
// app.use(express.urlencoded({extended:false}));

app.listen(PORT, () => {
  console.log("Server is Running!");
});