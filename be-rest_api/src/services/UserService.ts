import * as bcrypt from "bcrypt"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import jwt = require("jsonwebtoken")
import { UserEntity } from "../entities/UserEntity"

export default new (class UserService {
  private readonly userRepository: Repository<UserEntity> =
    AppDataSource.getRepository(UserEntity)

  //register
  async register(req: Request, res: Response) {
    try {
      const { name, gender, email, password } = req.body

      // Validasi inputan user
      if (!name || !gender || !email || !password) {
        return res.status(400).json({
          Message: "All fields are required",
        })
      }

      const existingUser = await this.userRepository.findOneBy({ email })
      if (existingUser) {
        return res.status(400).json({
          Message: "Email already exists",
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = this.userRepository.create({
        name,
        gender,
        email,
        password: hashedPassword,
      })

      const saveUser = await this.userRepository.save(user)
      return res.status(201).json({
        Message: "Register Success",
        data: saveUser,
      })
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Register Failed",
      })
    }
  }

  //login
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      // Validasi inputan user
      if (!email || !password) {
        return res.status(400).json({
          Message: "Email and password are required",
        })
      }

      const user = await this.userRepository.findOneBy({ email })
      if (!user) {
        return res.status(404).json({
          Message: "User not found",
        })
      }

      //verifikasi password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(401).json({
          Message: "Password not valid",
        })
      }

      const payload = {
        id: user.id,
        name: user.name,
        gender: user.gender,
        email: user.email,
        password: user.password,
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      })

      return res.status(200).json({
        Message: "Login Success",
        data: user,
        token: token,
      })
    } catch (error) {
      return res.status(500).json({ Message: error.message, Error: "Login Failed" })
    }
  }

  //allUser
  async allUser(req: Request, res: Response) {
    try {
      const users = await this.userRepository.find()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Get All User Failed",
      })
    }
  }

  async findByIdUser(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await this.userRepository.findOneBy({ id: Number(id) })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json({
        Message: error.message,
        Error: "Get User Failed",
      })
    }
  }
})()
