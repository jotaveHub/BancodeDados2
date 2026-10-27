import express from "express";
import { createPoi, getPois, getPoiByText, deletePoi, updatePoi } from "../controller/PoiController.js";

const PoiRouter = express.Router();

PoiRouter.get('/', getPois);
PoiRouter.post('/', createPoi);
PoiRouter.get('/text/:text', getPoiByText);
PoiRouter.delete('/:id', deletePoi);
PoiRouter.patch('/:id', updatePoi);

export default PoiRouter;
