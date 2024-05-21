import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import { ProductEntity } from "../entities/ProductEntity"

export default new (class ProductService {
  private readonly ProductRepository: Repository<ProductEntity> =
    AppDataSource.getRepository(ProductEntity)

  //? CREATE PRODUCT
  async createProduct(req: Request, res: Response) {
    const { name, description, image, price, stock } = req.body

    try {
      const newProduct = this.ProductRepository.create({
        name,
        description,
        image,
        price,
        stock,
        user: res.locals.user,
      })

      const saveProduct = await this.ProductRepository.save(newProduct)
      return res.status(200).json({
        Message: "Create Product Success",
        data: saveProduct,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Create Product Failed",
        error: error.message,
      })
    }
  }

  //? GET ALL
  async findAllProduct(req: Request, res: Response) {
    try {
      const products = await this.ProductRepository.find()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Get All Todo Failed",
      })
    }
  }

  //? GET BY ID
  async findByIdProduct(req: Request, res: Response) {
    try {
      const { id } = req.params
      const product = await this.ProductRepository.findOneBy({ id: Number(id) })

      return res.status(200).json(product)
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Get All Products Failed",
      })
    }
  }

  //? UPDATE
  async updatedProduct(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, description, image, price, stock } = req.body

      const existedProduct = await this.ProductRepository.findOneBy({
        id: Number(id),
        user: res.locals.user,
      })

      if (!existedProduct) return res.status(404).json({ Message: "Product Not Found" })

      // perbarui data
      existedProduct.image = image
      existedProduct.name = name
      existedProduct.description = description
      existedProduct.price = price
      existedProduct.stock = stock

      const result = await this.ProductRepository.save(existedProduct)
      return res.status(200).json({
        Message: "Update Product Success",
        data: result,
      })
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Update Product Failed",
      })
    }
  }

  async deletedProduct(req: Request, res: Response) {
    try {
      const { id } = req.params

      // Convert ID to number
      const productId = Number(id)
      if (isNaN(productId)) {
        return res.status(400).json({
          message: "Invalid Product ID",
        })
      }

      const product = await this.ProductRepository.findOneBy({
        id: productId,
        user: res.locals.user,
      })

      if (!product) {
        return res.status(404).json({
          message:
            "Product Not Found or You do not have permission to delete this product",
        })
      }

      // Proceed to delete the product
      await this.ProductRepository.delete({ id: productId })

      return res.status(200).json({ message: "Delete Product Success" })
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        error: "Delete Product Failed",
      })
    }
  }
})()
