import { Request, Response } from "express"
import UserService from "../services/UserService"

export default new (class AuthController {
  createUser(req: Request, res: Response) {
    UserService.register(req, res)
  }

  loginUser(req: Request, res: Response) {
    UserService.login(req, res)
  }

  allUser(req: Request, res: Response) {
    UserService.allUser(req, res)
  }

  findByIdUser(req: Request, res: Response) {
    UserService.findByIdUser(req, res)
  }
})()
