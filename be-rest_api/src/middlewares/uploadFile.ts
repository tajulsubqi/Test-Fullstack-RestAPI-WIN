import { NextFunction, Request, Response } from "express"
import * as multer from "multer"
import * as path from "path"

export const upload = (fieldName: string) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, file.originalname + "-" + uniqueSuffix + ".png")
    },
  })

  const uploadFile = multer({ storage: storage })

  return (req: Request, res: Response, next: NextFunction) => {
    uploadFile.single(fieldName)(req, res, function (error: any) {
      if (error) {
        if (
          error instanceof multer.MulterError &&
          error.code === "LIMIT_UNEXPECTED_FILE"
        ) {
          return next()
        }

        return res.status(400).json({ error: error.message })
      } else {
        if (!req.file) {
          return next()
        }
        res.locals.filename = req.file.filename
        next()
      }
    })
  }
}
