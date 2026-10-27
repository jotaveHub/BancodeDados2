import express from "express";
import { createPoi, getPois, getPoiByText, deletePoi } from "../controller/PoiController.js";

const PoiRouter = express.Router();

PoiRouter.get('/', getPois);
PoiRouter.post('/', createPoi);
PoiRouter.get('/text/:text', getPoiByText);
PoiRouter.delete('/', deletePoi);

export default PoiRouter;
