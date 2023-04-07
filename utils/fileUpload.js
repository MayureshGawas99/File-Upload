const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,"content")
  },
  fileName: (req,file,cb) => {
    console.log("filename",Date.now()+ path.extname(file.originalname))
    cb (null,Date.now()+ path.extname(file.originalname))
  }
});

const upload = multer({
  storage, 
  limits: {fileSize: 100000 * 100},
  fileFilter: (req,file,cb) => {
    // const fileTypes = /jpg|png|mp4|mkv|flv|mov|wmv|gif/;
    // const mimeType = fileTypes.test(file.mimeType);
    // const extname = fileTypes.test(path.extname(file.originalname));
    // console.log("file", mimeType,extname)
    // // if (mimeType && extname){
    // //   return cb(null,true);
    // // }
    // // cb("Only images supported");
    // cb(null,true);
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      console.log("succsess")
      return cb(null, true);
    }
    cb("Only images supported");
    
  }
}).single("content");


module.exports = upload;