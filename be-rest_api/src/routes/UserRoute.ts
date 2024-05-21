import * as express from "express"
import UserController from "../controllers/UserController"

export const UserRouter = express.Router()
UserRouter.post("/auth/register", UserController.createUser)
UserRouter.post("/auth/login", UserController.loginUser)
UserRouter.get("/users", UserController.allUser)
