import { Router } from "express";
import * as fruitRoutes from "./fruit/fruit.routes.js";
import * as carRoutes from "./car/car.routes.js";

const router = Router();

router.use("/fruits", fruitRoutes.router);
router.use("/cars", carRoutes.router);

export { router };
