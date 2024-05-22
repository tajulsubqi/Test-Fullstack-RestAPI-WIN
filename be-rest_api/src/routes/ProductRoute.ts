import * as express from "express"
import ProductControllers from "../controllers/ProductControllers"
import { verifyToken } from "../middlewares/jwtAuth"

export const ProductRouter = express.Router()
ProductRouter.post("/products", verifyToken, ProductControllers.create)
ProductRouter.get("/products", verifyToken, ProductControllers.findAll)
ProductRouter.get("/product/:id", verifyToken, ProductControllers.findById)
ProductRouter.put("/product/:id", verifyToken, ProductControllers.update)
ProductRouter.delete("/product/:id", verifyToken, ProductControllers.delete)
