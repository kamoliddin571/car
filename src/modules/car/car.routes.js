import { carController } from "./car.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", carController.getAllCar.bind(carController));
router.post("/", carController.createCar.bind(carController));

export { router };
