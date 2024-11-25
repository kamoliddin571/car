import { Router } from "express";
import * as fruitsController from "./fruit.controller.js";

const router = Router();

router.get("/", fruitsController.getAllFruit);
router.post("/", fruitsController.createFruit);

export { router };
