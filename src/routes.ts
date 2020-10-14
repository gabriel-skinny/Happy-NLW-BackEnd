import { Router } from "express"
import multer from "multer"

import uploadConfig from "./config/upload"
import OrphanagesController from "./controllers/OrphanagesControllers"

const routes = Router()
const upload = multer(uploadConfig)

routes.get("/orphanges", OrphanagesController.index)
routes.get("/orphanges/:id", OrphanagesController.show)
routes.post("/orphanges", upload.array("images"),OrphanagesController.create)


export default routes