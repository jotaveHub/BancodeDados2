import express from "express"
import { createPoi, getPois } from "../controller/PoiController.js"

const PoiRouter = express.Router()

PoiRouter.get('/', getPois)
PoiRouter.post('/', createPoi)

export default PoiRouter