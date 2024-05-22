import { v2 as cloudinary } from "cloudinary"
import { config } from "dotenv"

config()

export default new (class uploadToCloudinary {
  upload() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })
  }

  async destination(image: string) {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload("../uploads" + image, {
        folder: "rest-api-wicara",
      })
      return cloudinaryResponse.secure_url
    } catch (err) {
      throw err
    }
  }
})()
