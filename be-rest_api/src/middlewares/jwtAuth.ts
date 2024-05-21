import { NextFunction, Request, Response } from "express"
import * as dotenv from "dotenv"
import jwt = require("jsonwebtoken")

dotenv.config()

class AuthMiddleware {
  AuthenticateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.header("authorization")
      const secretKey = process.env.JWT_SECRET

      if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
          message: "Token Failed",
        })
      }

      const token = authHeader.split(" ")[1]
      try {
        const loginSession = jwt.verify(token, secretKey!)
        res.locals.loginSession = loginSession
        next()
      } catch (error) {
        return res.status(401).json({ message: "Token Failed" })
      }
    } catch (error) {
      next(error)
      return res.status(500).json({ Error: "Token Diperlukan" })
    }
  }
}

export default new AuthMiddleware().AuthenticateToken
