import { Router } from "express";
import { createMonitController } from "./controllers/createMonitController";
import { getIntervalController } from "./controllers/getIntervalController";
import { getMonitController } from "./controllers/getMonitController";

const routes = Router();

routes.post("/monit", new createMonitController().handle);

routes.get("/monit", new getMonitController().handle);

routes.get("/intervalo", new getIntervalController().handle);

export {routes}