const express = require("express");
const upload = require("../utils/fileUpload");
const {isAuthenticated, isSeller} = require("../middlewares/auth")
const router = express.Router();

router.post("/create",isAuthenticated ,isSeller , (req,res) => {
  console.log("in create");
  upload(req,res,async (err) => {
    if(err){
      console.log("coming in err",err);
      return res.status(500).send(err);
    }

    const {name,price} = req.body;
    if(!name || !price || !req.file){
      return res.status(400).json({err: "We require all 3"});
    }

    if(Number.isNaN(price)) {
      return res.status(400).json({err: "price must be a number"});
    }

    let productDetails = {
      name,
      price,
      content: req.file.path
    }

    return res.status(200).json({status:"ok",productDetails})
  })
})

module.exports = router;