import * as express from "express"
import ProductControllers from "../controllers/ProductControllers"
import { verifyToken } from "../middlewares/jwtAuth"
import { upload } from "../middlewares/uploadFile"

export const ProductRouter = express.Router()
ProductRouter.post("/products", verifyToken, upload("image"), ProductControllers.create)
ProductRouter.get("/products", verifyToken, ProductControllers.findAll)
ProductRouter.get("/product/:id", verifyToken, ProductControllers.findById)
ProductRouter.put("/product/:id", verifyToken, upload("image"), ProductControllers.update)
ProductRouter.delete("/product/:id", verifyToken, ProductControllers.delete)
