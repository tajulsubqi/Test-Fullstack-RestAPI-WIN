// const cloudinary = require("cloudinary").v2
// require("dotenv").config()

// export default new (class CloudinaryConfig {
//   upload() {
//     cloudinary.config({
//       cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//       secure: true,
//     })
//   }

//   async uploadImage(image: string) {
//     try {
//       const cloudinaryRes = await cloudinary.uploader.upload(image)
//       return cloudinaryRes.secure_url
//     } catch (error) {
//       throw error
//     }
//   }

//   async deleteImage(image: string) {
//     try {
//       const cloudinaryDelete = await cloudinary.uploader.destroy(image)
//       return cloudinaryDelete.result
//     } catch (error) {
//       throw error
//     }
//   }
// })()

import { v2 as cloudinary } from "cloudinary"
require("dotenv").config()

cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  // secure: true,
  cloud_name: "dji2n22ew",
  api_key: "477423629927378",
  api_secret: "U_liy9CW4LUdSo19SHz9bpXtW78",
  secure: true,
})

export default cloudinary
