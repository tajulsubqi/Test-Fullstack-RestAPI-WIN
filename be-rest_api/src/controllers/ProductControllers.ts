import { Request, Response } from "express"
import ProductService from "../services/ProductService"

export default new (class ProductController {
  create(req: Request, res: Response) {
    ProductService.createProduct(req, res)
  }

  findAll(req: Request, res: Response) {
    ProductService.findAllProduct(req, res)
  }

  findById(req: Request, res: Response) {
    ProductService.findByIdProduct(req, res)
  }

  update(req: Request, res: Response) {
    ProductService.updatedProduct(req, res)
  }

  delete(req: Request, res: Response) {
    ProductService.deletedProduct(req, res)
  }
})()
