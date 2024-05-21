import * as express from "express"
import { AppDataSource } from "./data-source"
import { ProductRouter } from "./routes/ProductRoute"
import { UserRouter } from "./routes/UserRoute"

AppDataSource.initialize()
  .then(async () => {
    const app = express()
    const port = 8000

    app.use(express.json())
    app.use("/api/v1", ProductRouter)
    app.use("/api/v1", UserRouter)

    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`)
    })
  })
  .catch((error) => console.log(error))
