import * as express from "express"
import ProductControllers from "../controllers/ProductControllers"

export const ProductRouter = express.Router()
ProductRouter.post("/product", ProductControllers.create)
ProductRouter.get("/products", ProductControllers.findAll)
ProductRouter.get("/product/:id", ProductControllers.findById)
ProductRouter.put("/product/:id", ProductControllers.update)
ProductRouter.delete("/product/:id", ProductControllers.delete)
