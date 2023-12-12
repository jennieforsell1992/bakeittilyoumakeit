import { RequestHandler } from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { randomUUID } from "crypto";

import dotenv from "dotenv";
dotenv.config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const storage = multer.diskStorage({});

// const upload = multer({ storage: storage });
// module.exports = upload;

// const uploadMulterMiddleware: RequestHandler = multer({
//   storage: storage,
// }).single("imgUrl");

// export default uploadMulterMiddleware;

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      allowedFormats: ["png", "jpg", "jpeg"],
      folder: "recipe-images",
      public_id: randomUUID(),
      width: 50,
      height: 50,
    };
  },
});

const uploadMulterMiddleware: RequestHandler = multer({
  storage: storage,
}).single("imgUrl");

export default uploadMulterMiddleware;
