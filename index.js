const express = require("express");
const app = express();
const {connectDB} = require("./config/db");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");



app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({extended:false}));


const PORT = 1338;

app.use("/api/v1/user",userRoutes);
app.use("/api/v1/product",productRoutes);


app.listen(PORT, () => {
  console.log("Server is Running!");
  connectDB();
  
});