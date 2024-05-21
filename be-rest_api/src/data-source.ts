import "reflect-metadata"
import { DataSource } from "typeorm"
require("dotenv").config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_Host,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
})
