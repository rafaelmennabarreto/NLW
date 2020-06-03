import { Router } from "express";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = Router();

const _pointController = new PointsController();
const _itemsController = new ItemsController();

routes.get("/", _itemsController.index);

routes.post("/points", _pointController.create);
routes.get("/points", _pointController.index);
routes.get("/points/:id", _pointController.show);

export default routes;
